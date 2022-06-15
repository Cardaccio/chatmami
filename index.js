// Calculador de costos

let talle = parseInt(prompt("Ingrese edad de su hijx"));

let cant = parseInt(prompt("Ingrese cantidad de compañeros"));

const precios =[500,600,750,800];

function presupuesto(costo){
    let costoTotal = cant*precios[costo];
    return costoTotal;
};

if(talle>=4 && talle<6){

    let valor = presupuesto(0);
    console.log(`Su presupuesto para ${cant} chicos es de $${valor}. $${precios[0]} cada una`)

}else if(talle>=7 && talle<12){

    let valor = presupuesto(1);
    console.log(`Su presupuesto para ${cant} chicos es de $${valor}. $${precios[1]} cada una`)

}else if(talle>=13 && talle<17){

    let valor = presupuesto(2);
    console.log(`Su presupuesto para ${cant} chicos es de $${valor}. $${precios[2]} cada una`)

}else if(talle>=17){

    let valor = presupuesto(3);
    console.log(`Su presupuesto para ${cant} chicos es de $${valor}. $${precios[3]} cada una`)

}else{
    console.log(`No tenemos talles para esa edad`)
};

