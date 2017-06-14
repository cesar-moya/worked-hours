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



