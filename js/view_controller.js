
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
            case (age >= data.milk.lower) && (age <= data.milk.upper):
                return data.milk.bev;
            case (age >= data.juice.lower) && (age <= data.juice.upper):
                return data.juice.bev;
            case (age >= data.cola.lower) && (age <= data.cola.upper):
                return data.cola.bev;
            case (age >= data.wine.lower) && (age <= data.wine.upper):
                return data.wine.bev;    
            default:
                return data.default.bev;
        }

}

// Modul: Bild aktualisieren | Test:
//ausgabe(updateImg("cola"));
function updateImg(imgName) {
    let img = document.getElementById("bevImg");
    img.src = gui.img.path + imgName + gui.img.ext;
    return imgName;
}

//Modul: Konsolenausgabe --> Test:
//ausgabe("test");
function ausgabe(outputStr) {
    console.log(outputStr);
}