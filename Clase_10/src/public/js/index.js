// Configuracion del socket del lado del cliente
const socket = io();


socket.emit("message_key", "Hola soy el Cliente!...")


socket.on("msg2_key", data => {
    console.log("Recibimos el mensaje: ", data)
})


socket.on("msg3_key", data => {
    console.log("Recibimos el mensaje: ", data)
})


socket.on("msg4_key", data => {
    console.log("Recibimos el mensaje: ", data)
})