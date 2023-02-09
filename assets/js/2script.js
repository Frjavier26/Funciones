// variables globales

let ele1 = document.querySelector('#ele1');
let ele2 = document.querySelector('#ele2');
let ele3 = document.querySelector('#ele3');
let ele4 = document.querySelector('#ele4');
let colorCaja;

// funcion

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        colorCaja = 'red'
    } else if (event.key === 's' || event.key === 'S') {
        colorCaja = 'aqua'
    } else if (event.key === 'd' || event.key === 'D') {
        colorCaja = 'yellow'
    }    else {
            alert("Solo puedes utilizar las teclas A-S-D para seleccionar un color")
    }
    })

    // funcion para evento click

    function pintar(caja) {
        caja.style.backgroundColor= colorCaja
    }

    // evento para pintar al dar click

    ele1.addEventListener('click', function () {
        pintar(ele1)
    })
    ele2.addEventListener('click', function () {
        pintar(ele2)
    })
    ele3.addEventListener('click', function () {
        pintar(ele3)
    })
    ele4.addEventListener('click', function () {
        pintar(ele4)
    })