var price = 150;
var helmetAdd = 0;

function show(){
    let selectBike = document.getElementById("selectBike").value;
    let weeksEntry = document.getElementById("weeksEntry").value;
    let helmet = document.getElementById("helmet").value;
    if (helmet == "si"){
        helmetAdd = 25;
    }
    if (weeksEntry == ""|| weeksEntry <= 0){
        alert(`Debes seleccionar la duracion del alquiler`)
    } else {
        alert(`Has alquilado la moto ${selectBike} por ${weeksEntry} semanas. El precio final es ${(weeksEntry * price) + helmetAdd}.`)
}
}
document.addEventListener("keydown", function(event){
    const pressedEnter = event.key;
    if (pressedEnter == 'Enter'){
        alert(`Para aceptar debes clickear el boton "Seleccionar"`)
    }
})
