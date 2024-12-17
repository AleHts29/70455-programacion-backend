// Hacemos los import 


// Uso de .trim()
let nombre = "   Juan   ";
console.log(nombre);
console.log(nombre.trim());


// .flat()
let arreglo = [[1, 2], [3, 4], [5, 6]];
console.log("arreglo Original:", arreglo);
console.log("arreglo con .flat():", arreglo.flat());


// Función asíncrona que utiliza dynamic import
// async function cargarModulo() {
//     const { default: modulo } = await import('./miModulo.js')


//     modulo.hacerAlgo(); // LLama a un metodo interno de el modulo importado
// }

// cargarModulo();




// USANDO DYNAMIC IMPORT
let modo = "calculos"
async function ejemploCal() {
    if (modo === "calculos") {
        const { default: Calculadora } = await import('./calculadora/calculadora.js')
        let calculadora = new Calculadora()
        console.log(calculadora.multiplicar(2, 3));
    }
}


ejemploCal()