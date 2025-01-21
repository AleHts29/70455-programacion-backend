import express from 'express';
import usersRouter from './routes/users.routes.js'
import petsRouter from './routes/pets.routes.js'
import __dirname from './utils.js';

// console.log(__dirname);


const app = express();
const PORT = 9090;

// prepara la confiuguracion del servidor para trabajar con archivos JSON y urlencode
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"))


// Middleware a nivel de Application
app.use((req, res, next) => {
    console.log("Middleware - Application");
    console.log(`Request: ${req.method} ${req.url}`);
    next();
});


function middleware1(req, res, next) {
    req.dato1 = "dato 01"
    next();
}

function middleware2(req, res, next) {
    req.dato2 = "dato 02"
    next();
}

app.get('/ruta1', middleware1, (req, res) => {
    res.json({ "req.dato1": req.dato1 })
})

app.get('/ruta2', middleware1, middleware2, (req, res) => {
    res.json({
        "req.dato1": req.dato1,
        "req.dato2": req.dato2
    })
})



// Definimos el routers
app.use('/api/user', usersRouter)
app.use('/api/pet', petsRouter)



// la escucha del puerto de comunicacion
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});

// RUTAS de directorios
// ruta relatima --> /src/public/
// ruta absoluta --> /Users/ale-hts/Coffee_Coder/CoderHouse/BackEnd/70455_Comision/Clase_08/src/public/