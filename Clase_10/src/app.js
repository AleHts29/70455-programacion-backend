import express from 'express';
import hadlebars from 'express-handlebars'
import __dirname from './utils.js';
import { Server } from 'socket.io'

import viewRouter from './routes/views.router.js'


const app = express();
const PORT = 8080;


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

const logs = []
socketServer.on('connection', socket => {
    // TODO: Aqui se implementa logica del socket


    // socket.on("message_key", data => {
    //     console.log("Recibimos el mensaje: ", data)

    // })

    // socket.emit('msg2_key', "Hola soy el el Backend");

    // socket.broadcast.emit('msg3_key', "Este evento es para todos los sockets, menos el socket desde que se emitió el mensaje!")

    // socketServer.emit('msg4_key', "Este evento lo ven todos los sockets!!....")



    /* =====================================
    =               Section 02             =
    ===================================== */

    //Message2 se utiliza para la parte de almacenar y devolver los logs completos.
    socket.on("message2", data => {
        logs.push({ socketid: socket.id, message: data })
        socketServer.emit('log', { logs });
    });


})