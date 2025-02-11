import express from 'express';
import mongoose from 'mongoose';
import __dirname from './utils.js';
import usersRouter from './routes/users.router.js'

const app = express();
const SEVER_PORT = 9090;

// Middleawre
app.use(express.json());
app.use(express.urlencoded({ extended: true }))



// Declaracion de un router
app.use("/ping", (req, res) => {
    res.send("Pong")
})


app.use('/api/users', usersRouter)



app.listen(SEVER_PORT, () => {
    console.log(`Server run on port: ${SEVER_PORT}`);

})




// Conexion a la DB
const DB_PATH = 'mongodb+srv://c43395:admin@cluster0.lgoy2ny.mongodb.net/clase14?retryWrites=true&w=majority&appName=Cluster0'


const connectMongoDB = async () => {
    try {
        await mongoose.connect(DB_PATH)
        console.log("Conectado con exito a Mongo usando Mongoose");

    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
}
connectMongoDB()



