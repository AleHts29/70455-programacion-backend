// ¿Cómo lo hacemos? Definiremos la función “mostrarLista”, la cual recibirá un arreglo con elementos como parámetro.

// Si la lista está vacía, devolver un mensaje indicando “Lista vacía”.
// Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. Finalizar el proceso devolviendo la longitud de la lista (Utilizar template strings)
// Invocar la función con los casos de prueba.


const array = [1, 2, 3, 4, 5, 6, 7, 8]
function mostrarLista(array) {

    for (const element of array) {
        console.log(element);
    }


    if (array.length === 0) {
        return "Lista vacía"
    }


    return `size del array: ${array.length}`
}



// Casos de prueba
// Caso 1: Lista vacía
let resultado1 = mostrarLista([])
console.log("Caso 1:", resultado1);


// Caso 2: Lista con elementos
let resultado2 = mostrarLista(array)
console.log("Caso 2:", resultado2);