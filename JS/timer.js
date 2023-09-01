// Strart Full SCreen Nad Exit..
let FullScreenn = document.querySelector("#PageClock .botomFullScreen");
let ExitFullScreenn = document.querySelector("#PageClock .botomExitFullScreen");

let headerrr = document.querySelector("#header");

let COLORSS = document.querySelector("#PageClock ul");
function getFullscreenElement() {
    return document.fullscreenElement
        ||
        document.webkitFullscreenElement
        ||
        document.mozFullscreenElement
        ||
        document.mszFullscreenElement
}

FullScreenn.addEventListener("click", () => {
    ExitFullScreenn.style.visibility = " visible";
    FullScreenn.style.visibility = " hidden";
    COLORSS.style.visibility = " hidden";
    headerrr.style.visibility = " hidden";
    document.documentElement.requestFullscreen().catch((e) => {

    });
});
ExitFullScreenn.addEventListener("click", () => {
    ExitFullScreenn.style.visibility = "hidden";
    FullScreenn.style.visibility = " visible ";
    COLORSS.style.visibility = " visible ";
    headerrr.style.visibility = " visible ";
    document.exitFullscreen().catch((e) => {

    });
});
// ENd Full SCreen Nad Exit..


//SRART TIMER
let Hour = document.querySelector("#clock .Hours");
let Minute = document.querySelector("#clock .Minutes");
let Second = document.querySelector("#clock .Seconds");
let H = "0" + 0;
let M = "0" + 0;
let S = "0" + 0;
function ShowTime() {
    'use strict';
    if (pauseONorOff == 0) {

        S++;
        if (S < 10) {

            S = "0" + S;
        }
        if (S == 60) {
            S = "0" + 0;
            M++;
            if (M < 10) {

                M = "0" + M;
            }
        }
        if (M == 60) {
            H++;
            if (H < 10) {

                H = "0" + H;
            }
            M = "0" + 0;
        }

        Second.textContent = S;
        Minute.textContent = M;
        Hour.textContent = H;
    }
}
window.onload = function () {

    'use strict';

    setInterval(ShowTime, 1000);


}
//End TIMER
// Start Settings
let pausee = document.querySelector(".Settings .fa-pause");
let pauseONorOff = 0;
pausee.addEventListener("click", () => {
    pausee.style.opacity = "0.5";
    playy.style.opacity = "1";
    pauseONorOff = 1;
});

let playy = document.querySelector(".Settings .fa-play");
playy.addEventListener("click", () => {
    playy.style.opacity = "0.5";
    pausee.style.opacity = "1";
    pauseONorOff = 0;
});
let rotatee = document.querySelector(".Settings .fa-rotate-left");
rotatee.addEventListener("click", () => {
    playy.style.opacity = "0.5";
    pausee.style.opacity = "1";
    pauseONorOff = 0;
    window.location.reload();
});

//End Settings
//Start Color 
let list = document.querySelectorAll("#PageClock ul li");
let mainClock = document.getElementById("clock");
console.log(mainClock);
list.forEach((li) => {
    li.addEventListener("click", (e) => {

        //Remove Active for all li...
        list.forEach((li) => {
            li.classList.remove("active");
        });
        //add Active class to current  element...
        e.currentTarget.classList.add("active");

        mainClock.style.color = e.currentTarget.dataset.color;

    });
});
//End Color
