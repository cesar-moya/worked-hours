// All of the Node.js APIs are available in this process.

//var seconds = 0;
var startDate;
var endDate;
var elapsed;
var action = 0; // 0 = Nothing, 1 = Coding, 2 = Meeting, 3 = Other
var btnCoding = document.getElementById('btnCoding');

btnCoding.addEventListener('click', () => {
    if(action == 0){
        action = 1;
        btnCoding.innerHTML = "STOP Coding";
        startDate = Math.floor(Date.now() / 1000);
    }else{
        action = 0;
        btnCoding.innerHTML = "Start Coding";
        //save to file or embedded db?
    }
    
    setInterval(function(){
        // let msg = document.createElement('div');
        // msg.style = "border: 1px solid black;";
        // msg.innerHTML = "Seconds: " + seconds;
        // document.body.appendChild(msg);
        let div = document.getElementById('divElapsed');
        endDate = Math.floor(Date.now() / 1000);
        elapsed = endDate - startDate;
        
        div.innerHTML = "Elapsed: " + elapsed;
        
    }, 1000);
}, false);

var btnTest = document.getElementById('btnTest');
var dBName = 'workDb';
var dBVersion = 2;

btnTest.addEventListener('click', () => {
    if(window.indexedDB){
        //window.alert('indexDB ok');
        //using HTML5 IndexedDB: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
        var request = window.indexedDB.open(dBName, dBVersion);
        var db;
        request.onerror = function(event){
            //TODO: handle VER_ERR, catch the upgrade needed error when upgrading the version
            window.alert('There was an error while initializing the internal database, please allow me to create it!, Error Code: ' + event.target.errorCode);
        };
        request.onupgradeneeded = function(event){
            alert('upgrade needed');
            db = event.target.result;
            var objectStore = db.createObjectStore('worklog', { keyPath : 'id' } );
            //work: {id, workType, startDate, endDate, elapsedSeconds}
            //objectStore.createIndex()
            objectStore.transaction.oncomplete = function(event){
                //todo
            };
        };
        request.onsuccess = function(event){
            db = event.target.result; // an instance of IDBDatabase
            window.alert('success');
        };

    }else{
        window.alert('indexedDB not supported');
    }
    
}, false);












