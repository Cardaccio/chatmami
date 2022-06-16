// Calculador de costos
let chico = prompt('Ingrese el nombre de su hijx');
let talle = parseInt(prompt(`Ingrese la edad de ${chico}`));

let cant = parseInt(prompt("Ingrese cantidad de productos que necesita"));
let compas = [];

if (cant > 1) {
    let darNombres = prompt('Desea agregar el nombre de los/as compañeros/as? Ingrese SI o NO').toUpperCase();

    if (darNombres == 'SI') {
        for (let i = 0; i < cant; i++) {
            compas[i] = prompt('Ingrese nombre de un/a compañero')
        }
    }
}



const precios = [500, 600, 750, 800];

function presupuesto(costo) {
    if (cant == 1) {
        let costoTotal = cant * precios[costo];
        console.log(`Su presupuesto para ${chico} es de $${costoTotal}+IVA. $${precios[costo] * 1.21} final.`)
    } else if (cant > 1 && compas == '') {
        let costoTotal = cant * precios[costo];
        console.log(`Su presupuesto para ${chico} y sus compañeros es de $${costoTotal}+IVA. $${precios[costo] * 1.21} final cada una.`)
    }else if (cant > 1 && compas != '') {
        let costoTotal = cant * precios[costo];
        console.log(`Su presupuesto para ${chico},${compas} es de $${costoTotal}+IVA. $${precios[costo] * 1.21} final cada una.`) 
    }else {
        console.log(`Debe ingresar por lo menos un valor positvo`)
    }
};

if (talle >= 4 && talle <= 6) {
    presupuesto(0);

} else if (talle >= 7 && talle <= 12) {
    presupuesto(1);

} else if (talle >= 13 && talle < 17) {
    presupuesto(2);

} else if (talle >= 17) {
    presupuesto(3);

} else {
    console.log(`No tenemos talles para esa edad`)
};

