// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var btn = document.getElementById('btnToggle');
//window.alert(btn);
btn.addEventListener('click', () => {
    //window.alert('click!');
    var msg = document.createElement('div');
    msg.style = "border: 1px solid black;";
    msg.innerHTML = "Some message here";
    document.body.appendChild(msg);

    
}, false);

