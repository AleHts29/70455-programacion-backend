//Usemos un arreglo de prueba:
let valoresOriginales = [1, 2, 3, 4, 5];


let nuevosValores = valoresOriginales.map(x => x + "a")
// console.log(nuevosValores);


//Que pasa si declaramos el callback fuera?
const mapCallback = (valor) => {
    if (valor % 2 === 0) {
        return valor
    } else {
        return " No es Par!"
    }
}


const evaluarParesMap = valoresOriginales.map(mapCallback)
// console.log(evaluarParesMap);






//Recrear un callback de funcion map:
//Usemos un arreglo de prueba:
let arregloDePrueba = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const callbackTest = x => x * 2

console.log(".map", arregloDePrueba.map(callbackTest));


const miFuncMap = (array, callback) => {
    let nuevoArrgelo = [];

    for (let i = 0; i < array.length; i++) {
        let nuevoValor = callback(array[i])
        nuevoArrgelo.push(nuevoValor)
    }
    return nuevoArrgelo;
}

let nuevoArregloPropio = miFuncMap(arregloDePrueba, callbackTest)
console.log("miFuncMap", nuevoArregloPropio);



//Extra: Podemos agregar nuestra funcion al arreglo como tal, usando el prototype del objeto Array:
Array.prototype.miFuncionMap = function (callback) {
    let nuevoArrgelo = [];

    for (let i = 0; i < this.length; i++) {
        let nuevoValor = callback(this[i])
        nuevoArrgelo.push(nuevoValor)
    }
    return nuevoArrgelo;
}


// console.log("miFuncionMap", arregloDePrueba.miFuncionMap(callbackTest));
// console.log("test", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(callbackTest));



/* =====================================
=              Calculadora             =
===================================== */

const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;


const realizarOperacion = (num1, num2, callback) => {
    console.log(`Voy a realizar operacion: ${callback}`);
    let result = callback(num1, num2)
    return result;
}


// Invocaciones 
console.log("Suma: ", realizarOperacion(5, 3, sumar));
console.log("Resta: ", realizarOperacion(5, 3, restar));
console.log("Multiplicación: ", realizarOperacion(5, 3, multiplicar));
console.log("División: ", realizarOperacion(5, 3, dividir));

// Agregando nuevas funciones a la calculadora