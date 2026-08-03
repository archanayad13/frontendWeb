let btns = document.querySelectorAll(".btns");
let clock = document.getElementById("clock");
let stopwatch = document.getElementById("stopwatch");
let timer = document.getElementById("timer");

btns.forEach((button) => {
    button.addEventListener("click", (evt) => {
        //now do using classList


        //this is using DOM
        if (evt.target.id === "stopwatch-btn") {
            clock.style.display = "none";
            stopwatch.style.display = "block";
            timer.style.display = "none";
        }
        else if (evt.target.id === "clock-btn") {
            clock.style.display = "block";
            stopwatch.style.display = "none";
            timer.style.display = "none";
        }
        else  {
            clock.style.display = "none";
            stopwatch.style.display = "none";
            timer.style.display = "block";
        }
    })
})