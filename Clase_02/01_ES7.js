const array = [1, 2, 3, 4, 5, 6]

const numeros = array.map((item) => item * 2)
console.log(numeros);// [2, 4, 6, ....]


//ES7
/** 
 * Toma un arreglo de valores base y con ayuda del operador map(), utiliza el operador exponencial para
 * elevar el valor base por su indice así: (1**0, 2**1, 3**2, 4**3, 5**4, 6**5) 
*/
//Uso de exponencial ** como remplazo de la funcion pow de la librería Math (Math.pow(base, exp)))
const numeros2 = array.map((base, indece) => base ** indece)
console.log(numeros2);




//Array.includes: Corrobora si algún elemento existe en el arreglo:
const nombres = ["Juan", "Camilo", "Maria", "Vanesa"]

let nombrteABuscar = "maria"
if (nombres.includes(nombrteABuscar)) {
    console.log(`${nombrteABuscar} está en el arreglo.`);
} else {
    console.log(`${nombrteABuscar} no está en el arreglo.`);
}
