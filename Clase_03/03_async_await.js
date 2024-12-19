const dividirConPromesas1 = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        console.log(`Numeros para dividir: ${dividendo} / ${divisor}`);

        setTimeout(() => {
            if (divisor === 0) {
                reject("No se puede dividir por cero!!")
            } else {
                resolve(dividendo / divisor)
            }
        }, 4000)

    })
}


const dividirConPromesas2 = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        console.log(`Numeros para dividir: ${dividendo} / ${divisor}`);
        if (divisor === 0) {
            reject("No se puede dividir por cero!!")
        } else {
            resolve(dividendo / divisor)
        }
    })
}


const funcionAsincronica = async (a, b) => {
    try {
        let resultado = await dividirConPromesas1(a, b) // esta tarda 2s en resolver

        let resultado2 = await dividirConPromesas2(a, resultado)

        console.log(resultado2);
    } catch (error) {

    }
}

funcionAsincronica(2, 5) // 4s

console.log("HOLA");


fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) // Convierte la respuesta a JSON
    .then(data => console.log('Datos obtenidos:', data)) // Muestra los datos obtenidos
    .catch(error => console.error('Error en la solicitud:', error)); // Captura errores

