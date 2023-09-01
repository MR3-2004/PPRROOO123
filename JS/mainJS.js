// Start login page..












let inputUserName = document.querySelector(".loginPage .container .userName input");
let logoUserName = document.querySelector(".loginPage .container .userName .fa-solid");
let inputPass = document.querySelector(".loginPage .container .Pass input");
let logoPass = document.querySelector(".loginPage .container .Pass .fa-solid");

inputUserName.addEventListener("focus", () => {

    inputUserName.style = " box-shadow: 1px 1px 12px 1px  #EEEEEE; ";
    logoUserName.style = "text-shadow: 1px 1px 5px #EEEEEE;";
});

inputUserName.addEventListener("blur", () => {
    inputUserName.style = " box-shadow:none ";
    logoUserName.style = "text-shadow:none;";
});
inputPass.addEventListener("focus", () => {

    inputPass.style = " box-shadow: 1px 1px 12px 1px  #EEEEEE; ";
    logoPass.style = "text-shadow: 1px 1px 5px #EEEEEE;";
});
inputPass.addEventListener("blur", () => {
    inputPass.style = " box-shadow:none ";
    logoPass.style = "text-shadow:none;";
});