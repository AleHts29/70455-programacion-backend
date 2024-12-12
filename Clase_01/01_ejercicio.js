// scope de las variables 

let i = 10 // global variable
const testScope = function () {
    // let i = 0;
    i = 45
    const PI = "3,14..."
    if (true) {
        let varialble = 12
        console.log("Cotexto IF:::", varialble); // 12
    }
    // console.log("Cotexto Funcion:::", varialble);// ?? -- Nos da error: ReferenceError: varialble is not defined
    console.log(i); // 45


    console.log(PI);// 3,14...

    PI = 12 // Nueva asignacion de una Constante -- Nos da error: TypeError: Assignment to constant variable.
    console.log(PI); //???

}


// let test = testScope();
// console.log(test);


// const obj1 = {
//     name: "John Doe",
//     age: 30,
//     address: {
//         street: "123 Main St",
//         city: "New York"
//     }
// }
// console.log(obj1);




// obj1.name = "Jorge"
// obj1.email = "jorge@example.com"
// console.log(obj1);

// obj1 = "Hola soy el obj1"
// console.log(obj1);




/*=============================================
=                   Funciones               =
=============================================*/


const suma = (a, b) => {
    // Logica
    let result = a + b;
    return result;
}
let total = suma(1, 2)
console.log(`El total de la suma es: ${total}`);

// Refactor
const sumaRefactor = (a, b) => a + b;

let totalSumaRefactor = sumaRefactor(3, 2)
console.log(`El total de la suma es: ${totalSumaRefactor}`);

