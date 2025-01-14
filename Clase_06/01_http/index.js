const http = require('http')



// Definir un PUERTO
const PORT = 8080



// Definir el server
const server = http.createServer((request, response) => {
    response.end("Hola soy un server con http Nativo y --watch...")
})


// poner a escuchar el server
server.listen(PORT, () => {
    console.log(`Server escuchando en el puerto ${PORT}`)
})