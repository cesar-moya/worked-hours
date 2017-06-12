// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var btn = document.getElementById('btnToggle');
//window.alert(btn);
btn.addEventListener('click', () => {
    //window.alert('click!');

    // var Stopwatch = require("node-stopwatch").Stopwatch;
    // var stopwatch = Stopwatch.create();
    // stopwatch.start();
    
    // console.log("ticks: " + stopwatch.elapsedTicks);
    // console.log("milliseconds: " + stopwatch.elapsedMilliseconds);
    // console.log("seconds: " + stopwatch.elapsed.seconds);
    // console.log("minutes: " + stopwatch.elapsed.minutes);
    // console.log("hours: " + stopwatch.elapsed.hours);
    
    //stop it now 
    //stopwatch.stop();
    var seconds = 0;
    setInterval(function(){
        // let msg = document.createElement('div');
        // msg.style = "border: 1px solid black;";
        // msg.innerHTML = "Seconds: " + seconds;
        // document.body.appendChild(msg);
        let div = document.getElementById('divElapsed');
        div.innerHTML = seconds + " seconds";
        seconds++;
    }, 1000);




}, false);



