
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: 
	Check Daten :: 
    Btn. Trigger :: check
    Business-Logic (Alter --> Getränk) :: check
    Bild austauschen :: check!
*/

// Modul: Ablaufsteuerung | Test:
//controller();
function controller() {
    ausgabe(updateImg(checkAge(getInput())))
}

// Btn-Definition + Funktionalität
let btn = document.getElementById("trigBtn");
btn.addEventListener("click", actOnClick);

function actOnClick() {
    //ausgabe("klick!");
    controller();
}

// Modul: Eingabe | Test:
//ausgabe(getInput());
function getInput() {
    let inputField = document.getElementsByName("eingabe")[0]; // Elements mehrzahl (array)
    let age = parseInt(inputField.value);
    return age;
}

// Modul: Business-Logic (Mapping) | Test:
//ausgabe(checkAge(6));
function checkAge(age) {

    switch (true) 
        {
            case (age >= 0) && (age <= 5):
                return "milch";
            case (age >= 6) && (age <= 12):
                return "saft";
            case (age >= 13) && (age <= 17):
                return "cola";
            case (age >= 18) && (age <= 130):
                return "wein";    
            default:
                return "tee";
        }

}

// Modul: Bild aktualisieren | Test:
//ausgabe(updateImg("cola"));
function updateImg(imgName) {
    let img = document.getElementById("bevImg");
    img.src = "./bilder/" + imgName + ".jpg";
    return imgName;
}

//Modul: Konsolenausgabe --> Test:
//ausgabe("test");
function ausgabe(outputStr) {
    console.log(outputStr);
}