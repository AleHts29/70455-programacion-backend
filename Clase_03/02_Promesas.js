// ! Promesas

const dividirConPromesas = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        console.log(`Numeros para dividir: ${dividendo} / ${divisor}`);
        if (divisor === 0) {
            reject("No se puede dividir por cero!!")
        } else {
            resolve(dividendo / divisor)
        }
    })
}

// console.log("Resultado", dividirConPromesas(2, 0));


dividirConPromesas(2, 0)
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))


// Otro ejemplo
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json()) // Convierte la respuesta a JSON
//     .then(data => console.log('Datos obtenidos:', data)) // Muestra los datos obtenidos
//     .catch(error => console.error('Error en la solicitud:', error)); // Captura errores


