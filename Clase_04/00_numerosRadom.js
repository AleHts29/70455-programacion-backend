/*
Crear un proyecto de node que genere 10000 números aleatorios en un rango de 1 a 20. Indicar por consola la finalización de esta operación con un mensaje.

Mediante el uso de Promesas, crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.

Nota: Considerar que esta operación debe realizarse de forma asíncrona.

*/
// 01_ Necesito  math.random ---> Generar nummero ala
// 02_ for  para generar 10000 iteraciones
/* usar Promesas
salida esperada::
        let obj = {
            1: 3
            3: 1,
            4: 1
            2: 350
            ...
            20: 780
        }

        obj[1] = ++ 
*/

const generarNumerosRandom = () => {
    return new Promise((resolve, reject) => {
        try {
            let numeros = []

            for (let i = 0; i < 10000; i++) {
                numeros.push(Math.floor(Math.random() * 20) + 1)
            }
            resolve(numeros)
        } catch (error) {
            reject(error)
        }
    })
}



// const numeros = [1, 1, 3, 4, 5, 1, 7, 8, 9, ....]
const contarFrecuencias = (numeros) => {
    return new Promise((resolve, reject) => {
        try {
            let obj = {}

            numeros.forEach(numero => {
                if (!obj[numero]) {
                    obj[numero] = 1
                } else {
                    obj[numero]++
                }
            });
            resolve(obj)
        } catch (error) {
            reject(error);
        }
    })
}


const main = async () => {
    try {
        // generador de numeros aleatoreros
        const numeros = await generarNumerosRandom() // bucle 1 a 10000
        console.log(numeros);

        // contar las frecuencias
        const result = await contarFrecuencias(numeros)
        console.log(result);

    } catch (error) {
        console.error("Error", error);
    }
}



main();





const user = {
    name: "John Doe",
    age: 30,
    password: "qwerty123",
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
}