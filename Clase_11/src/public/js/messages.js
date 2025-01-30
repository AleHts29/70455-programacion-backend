const socket = io();

const chatBox = document.getElementById('chatBox')

let user;

/*=============================================
=              Aplicando SweetAlert           =
=============================================*/

Swal.fire({
    icon: 'info',
    title: 'Bienvenido!',
    input: 'text',
    text: 'Ingrese userName para identificarse en la sala de chatBox',
    inputValidator: (value) => {
        if (!value) {
            return 'Debes ingresar un nombre de usuario!'
        } else {
            // 2da parte - vamos a emitir un mensaje
            socket.emit('userConnected', { user: value })
        }
    },
    allowOutsideClick: false,
}).then(result => {
    user = result.value

    // Asignamos el username al campo correspondiente
    const myName = document.getElementById('myName')
    myName.innerHTML = user
})


chatBox.addEventListener("keyup", evt => {
    if (evt.key === 'Enter') {
        if (chatBox.value.trim().length > 0) {
            socket.emit('message', { user: user, message: chatBox.value })
            chatBox.value = ''; // con esto limpio el chatBox
        } else {
            Swal.fire({
                icon: 'warning',
                title: "Alerta",
                text: "Debes ingresar un mensaje!",
                confirmButtonText: "Aceptar"
            })
        }
    }
})


// Escuchamos el evento del server
socket.on('messageLogs', data => {
    const messagesLogs = document.getElementById('messageLogs')
    let logsAux = ''


    data.forEach(log => {
        logsAux += `<div><strong>${log.user}:</strong> ${log.message}</div>`
    })

    messagesLogs.innerHTML = logsAux;
})



// 2da - parte
// Aqui escuchamos los nuevos usuarios que se conectan al chat
socket.on('userConnected', data => {
    let message = `Nuevo usuario conectado: ${data}`
    Swal.fire({
        icon: 'info',
        // title: "Nuevo Usuario!",
        text: message,
        confirmButtonText: "Aceptar",
        position: 'top-end',  // Muestra la alerta en la esquina superior derecha
        toast: true,  // Estilo tipo notificación pequeña
        timer: 5000,  // Desaparece automáticamente en 5 segundos
        timerProgressBar: true,  // Muestra una barra de progreso
        showConfirmButton: false  // No muestra el botón de confirmación
    })
})




/*=============================================
=                   Extras                   =
=============================================*/
const closeChatBox = document.getElementById('closeChatBox')
closeChatBox.addEventListener('click', (evt) => {
    socket.emit('closeChat', { close: "close" })
    messagesLogs.innerHTML = '';
})