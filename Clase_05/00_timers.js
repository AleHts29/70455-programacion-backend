const temporizador = (callback) => {
    // SetTimeout
    setTimeout(() => {
        callback()
    }, 4000)
}

const soyOtraFunc = () => console.log("Realizando operacion con setTimeOut")
// temporizador(soyOtraFunc)



// 02 - setInterval
const constador = () => {
    let constador = 0;
    console.log("Realizando Op con setInterval");

    let timer = setInterval(() => {
        console.log(constador++);
        if (constador == 5) {
            console.log("Conteo terminado");

            clearInterval(timer); // Detener el intervalo cuando se cumple la condición
        }
    }, 1000)
}
constador()