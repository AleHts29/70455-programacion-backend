import express from 'express';
import __dirname from './util.js';
import handlebars from 'express-handlebars';

import mongoose from 'mongoose';
import studentRouter from './routes/students.router.js'
import coursesRouter from './routes/courses.router.js'
import viewsRouter from "./routes/views.router.js";

import studentsModel from './services/db/models/students.js';
import { coursesModel } from './services/db/models/courses.js';

//Declarando Express para usar sus funciones.
const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Template engine
 */
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'))

//Declaración de Routers:
app.use('/', viewsRouter);
app.use("/api/students", studentRouter);
app.use("/api/courses", coursesRouter);

const SERVER_PORT = 9091;
app.listen(9091, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

const connectMongoDB = async () => {
    try {

        /*=============================================
        =                   Population                =
        =============================================*/

        await mongoose.connect('mongodb://localhost:27017/colegio_C16?retryWrites=true&w=majority');
        console.log("Conectado con exito a MongoDB usando Moongose.");


        // 1ro creamos al estudiante
        // let newStudent = await studentsModel.create({
        //     name: "Juan",
        //     lastName: "Fortez",
        //     age: "23",
        // })
        // console.log("Estudiante creado: ", newStudent); //_id: new ObjectId("67b3dc75b37c9e043471a29c")


        // 2do creamos un nuevo curso
        // let nuevoCurso = await coursesModel.create(
        //     {
        //         title: "Curso Java",
        //         description: "Curso backend de Java",
        //         teacherName: "Juan Torres"
        //     }
        // );


        // 3ro creamos la relacion
        // let student = await studentsModel.findOne({ _id: "67b3e19a619885be27dc8895" })
        // console.log(student);
        // student.courses.push({ course: "65e914f12daa60cd52aaa5c0" })
        // console.log(student);

        // // // Actualizamos registro en la DB
        // let resultUpdate = await studentsModel.updateOne({ _id: "67b3e19a619885be27dc8895" }, student)
        // console.log(resultUpdate);



        // 4to añadimos el populate
        // let student = await studentsModel.find().populate("courses.course")
        // // console.log(student);
        // console.log(JSON.stringify(student, null, 2));



        // Usando Middleware .pre
        let student = await studentsModel.find()
        // console.log(student);
        console.log(JSON.stringify(student, null, 2));





    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
};
connectMongoDB();