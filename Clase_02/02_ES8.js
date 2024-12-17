//ES8
//Uso de Object.entries, Object.values, Object.keys 
//para un mejor control interno sobre las propiedades de un objeto.

const impuestos = {
    impuesto1: 1,
    impuesto2: 2,
    impuesto3: 3,
    impuesto4: 4
}

let parLlaveValor = Object.entries(impuestos)
console.log("parLlaveValor", parLlaveValor);


let soloPropiedades = Object.keys(impuestos)
console.log("soloPropiedades", soloPropiedades);


let soloValores = Object.values(impuestos)
console.log("soloValores", soloValores);



// Calcular el total de impuestos en valores
let totalImpuestos = soloValores.reduce((total, impuesto) => total + impuesto, 0)
console.log("Total de impuestos:", totalImpuestos);



