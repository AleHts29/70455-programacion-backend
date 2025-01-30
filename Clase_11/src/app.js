import express from 'express';
import hadlebars from 'express-handlebars'
import __dirname from './utils.js';
import { Server } from 'socket.io'

import viewRouter from './routes/views.router.js'


const app = express();
const PORT = process.env.PORT || 8080;


//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configuracion handlebars
app.engine('handlebars', hadlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

//Carpeta public
app.use(express.static(__dirname + '/public'))

// Rutas
app.use('/ping', (req, res) => {
    res.json({ message: 'Pong!' });
})

// app.use('/', (req, res) => {
//     res.render('index', {})
// })


app.use("/hbs", viewRouter)



const httpServer = app.listen(PORT, () => {
    console.log(`Server corriendo en http://localhost:${PORT}`);
})



// Creamos instacia de socket
const socketServer = new Server(httpServer)

const messages = []
socketServer.on('connection', socket => {
    // TODO: Aqui se implementa logica del socket
    // Esto lo ve cualquier user que se conecte
    socketServer.emit('messageLogs', messages)




    // aqui vamos a recibir { user: user, message: catBox.value }
    socket.on('message', data => {
        messages.push(data)

        // enviamos un array de objetos a todos los clientes 
        // ---> [{ user: "Juan", message: "Hola" }, { user: "Elias", message: "Como estas?" }]

        socketServer.emit('messageLogs', messages)
    })



    socket.on('userConnected', data => {
        socket.broadcast.emit('userConnected', data.user)
    })


    // Cerramos el canal de comunicacion
    socket.on('closeChat', data => {
        if (data.close === "close") {
            socket.disconnect()
        }
    })


})