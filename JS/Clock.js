// Strart Full SCreen Nad Exit..
let FullScreenn = document.querySelector("#PageClockk .botomFullScreen");
let ExitFullScreenn = document.querySelector("#PageClockk .botomExitFullScreen");
let Ssettings = document.querySelector("#PageClockk .Settings");
let COLORSS = document.querySelector("#PageClockk ul");
let headerrr = document.querySelector("#header");
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
    FullScreenn.style = " display: none ";
    ExitFullScreenn.style = "display:block;";

    COLORSS.style.visibility = " hidden";
    Ssettings.style.visibility = " hidden";
    sOFFdate.style.visibility = " hidden";
    sONdate.style.visibility = " hidden";
    sOFFday.style.visibility = " hidden";
    sONday.style.visibility = " hidden";
    sOFF24H.style.visibility = " hidden";
    sON24H.style.visibility = " hidden";
    headerrr.style.visibility = " hidden";
    document.documentElement.requestFullscreen().catch((e) => {

    });
});
ExitFullScreenn.addEventListener("click", () => {
    FullScreenn.style = " display:block;";
    ExitFullScreenn.style = " display: none; ";

    COLORSS.style.visibility = " visible ";
    Ssettings.style.visibility = " visible ";
    sOFFdate.style.visibility = " visible";
    sONdate.style.visibility = " visible";
    sOFFday.style.visibility = " visible";
    sONday.style.visibility = " visible";
    sOFF24H.style.visibility = " visible";
    sON24H.style.visibility = " visible";
    headerrr.style.visibility = " visible";
    document.exitFullscreen().catch((e) => {

    });
});
// ENd Full SCreen and Exit..



//Start Clock Datee

let AAMorPMM = document.querySelector("#PageClockk .AMorPM");
let DDateee = document.querySelector("#PageClockk #Datee");
let Dayyy = document.querySelector("#PageClockk #Dayy");
let Hour = document.querySelector("#PageClockk #clock .Hours");
let Minute = document.querySelector("#PageClockk #clock .Minutes");
let Second = document.querySelector("#PageClockk #clock .Seconds");
function numberDayToString(p) {
    switch (p) {
        case 0:
            return "Sunday"
        case 1:
            return "Tuesday"
        case 2:

            break;
        case 3:
            return "Wednesday"

        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        default:
            return "Saturday"

    }

}
function Plus1(p) {
    return ++p;
}
//Datee
function ShowTime() {
    'use strict';
    var Datenwe = new Date();
    DDateee.textContent = Datenwe.getFullYear() + "/" + Plus1(Datenwe.getMonth()) + "/" + Datenwe.getDate();
    console.log(Datenwe.getDay());
    let D = numberDayToString(Datenwe.getDay());
    Dayyy.textContent = D;
    let H = Datenwe.getHours();
    let M = Datenwe.getMinutes();
    let S = Datenwe.getSeconds();
    if (S < 10) {
        S = '0' + S;
    }
    if (M < 10) {
        M = '0' + M;
    }
    if (H < 10) {
        H = '0' + H;
    }
    Second.textContent = S;
    Minute.textContent = M;
    if (zaroOrOneFor24H == 0) {
        if (H >= 12) {
            H -= 12;
            AAMorPMM.textContent = "PM";
        }
        else {
            AAMorPMM.textContent = "AM";
        }
    }
    else {
        AAMorPMM.textContent = "";
    }

    Hour.textContent = H;
}
window.onload = function () {

    'use strict';

    setInterval(ShowTime, 500);
}
//End Clock
// Start ON && OFF 
let sONanfOFFday = document.querySelector("#PageClockk .Settings .DayS .ONNandOFF");
let sONday = document.querySelector("#PageClockk .Settings .DayS .ON");
let sOFFday = document.querySelector("#PageClockk .Settings .DayS .OFF");
let zaroOrOne = 1;
sONanfOFFday.addEventListener("click", () => {
    if (zaroOrOne == 1) {
        sOFFday.style.visibility = " visible";
        sONday.style.visibility = " hidden";
        Dayyy.style.visibility = " hidden";
        zaroOrOne = 0;
    }
    else {
        sOFFday.style.visibility = " hidden";
        sONday.style.visibility = " visible";
        Dayyy.style.visibility = " visible";
        zaroOrOne = 1;
    }

});

let sONanfOFFdate = document.querySelector("#PageClockk .Settings .DateS .ONNandOFF");
let sONdate = document.querySelector("#PageClockk .Settings .DateS .ON");
let sOFFdate = document.querySelector("#PageClockk .Settings .DateS .OFF");
let zaroOrOneFordate = 1;
sONanfOFFdate.addEventListener("click", () => {
    if (zaroOrOneFordate == 1) {
        sOFFdate.style.visibility = " visible";
        sONdate.style.visibility = " hidden";
        DDateee.style.visibility = " hidden";
        zaroOrOneFordate = 0;
    }
    else {
        sOFFdate.style.visibility = " hidden";
        sONdate.style.visibility = " visible";
        DDateee.style.visibility = " visible";
        zaroOrOneFordate = 1;
    }

});

let sONanfOFF24H = document.querySelector("#PageClockk .Settings .Hours24 .ONNandOFF");
let sON24H = document.querySelector("#PageClockk .Settings .Hours24 .ON");
let sOFF24H = document.querySelector("#PageClockk .Settings .Hours24 .OFF");
let zaroOrOneFor24H = 1;
sONanfOFF24H.addEventListener("click", () => {
    if (zaroOrOneFor24H == 1) {
        sOFF24H.style.visibility = " visible";
        sON24H.style.visibility = " hidden";

        zaroOrOneFor24H = 0;
    }
    else {
        sOFF24H.style.visibility = " hidden";
        sON24H.style.visibility = " visible";

        zaroOrOneFor24H = 1;
    }

});






// End ON && OFF 
//Start Color 
let list = document.querySelectorAll("#PageClockk ul li");
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
