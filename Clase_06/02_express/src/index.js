import express from 'express';


// declaramos express
const app = express()

// definimos puerto
const PORT = 8080


// Definir respuesta hacia el cliente
// Endpoint
app.get("/ping", (req, res) => {
    res.send("pong")
})

app.get("/saludo", (req, res) => {
    res.send("Hola desde server usando Express...")
})


app.get("/bienvenida", (req, res) => {
    res.send(`<p style="color:blue">Bienvenida a express, con formato HTML</p>`)
})

app.get("/usuario", (req, res) => {
    const user = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 25,
        profesion: "Desarrollador web"
    }

    res.send(user)
})


/*=============================================
=         Usando req.params                  =
=============================================*/
// http://localhost:8080/usuario2/Ezequiel/Apesteguia
app.get("/usuario2/:nombre/:apellido", (req, res) => {
    console.log(req.params);
    res.send(`Hola, tu nombre es: ${req.params.nombre} ${req.params.apellido}`)
})


const users = [
    { id: 1, nomnbre: "Juan", apellido: "Torres", edad: "X", genero: "M" },
    { id: 2, nomnbre: "Carlos", apellido: "Garcia", edad: "20", genero: "M" },
    { id: 3, nomnbre: "Maria", apellido: "Torres", edad: "15", genero: "F" },
    { id: 4, nomnbre: "Patricia", apellido: "Ramirez", edad: "30", genero: "F" }
]

// http://localhost:8080/finduser/2
app.get("/finduser/:userId", (req, res) => {
    console.log(req);

    const userfind = users.find(u => u.id === parseInt(req.params.userId))
    console.log(userfind);

    if (userfind) {
        res.send(userfind)
    } else {
        res.send("No se encontró el usuario")
    }
})




/*=============================================
=         Usando req.query                   =
=============================================*/

// http://localhost:8080/ejemploQueries/query?nombre=Eli&apellido=Cafiero&edad=38

const dataArray = []
app.get("/ejemploQueries", (req, res) => {

    let datos = req.query
    console.log(datos);

    dataArray.push(datos)

    // retorno el array
    res.send(dataArray)
})


app.get("/find-all-user", (req, res) => {
    console.log(req);

    res.send(users)
})

app.get("/find-user-by-genero", (req, res) => {
    let { genero } = req.query
    if (genero) {
        res.send(users.filter(user => user.genero === genero))
    } else {
        res.send("Debes enviar el parámetro genero")
    }
})


// poner a escuchar el server
app.listen(PORT, () => {
    console.log(`Server escuchando en el puerto ${PORT}`)
})