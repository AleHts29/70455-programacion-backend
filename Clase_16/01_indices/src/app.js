import express from 'express';
import mongoose from 'mongoose';
import __dirname from './utils.js';
import usersRouter from './routes/users.router.js'
import { userModel } from './models/user.model.js'

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
const DB_PATH = 'mongodb://localhost:27017/clase16_indexes_populate?retryWrites=true&w=majority'


const connectMongoDB = async () => {
    try {
        await mongoose.connect(DB_PATH)
        console.log("Conectado con exito a Mongo usando Mongoose");


        // MODO _TEST DE INDICES
        const result1 = await userModel.find().explain('executionStats')
        console.log("result1 ", result1);


        const result2 = await userModel.find({ first_name: "Celia" }).explain('executionStats')
        console.log("result2: ", result2);



    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
}
connectMongoDB()



//TODO - Con index en first_name
// executionStats: {
//     executionSuccess: true,
//     nReturned: 2,
//     executionTimeMillis: 0,
//     totalKeysExamined: 2,
//     totalDocsExamined: 2,


//TODO - Sin Index
// executionStats: {
//     executionSuccess: true,
//     nReturned: 2,
//     executionTimeMillis: 8,
//     totalKeysExamined: 0,
//     totalDocsExamined: 5000,