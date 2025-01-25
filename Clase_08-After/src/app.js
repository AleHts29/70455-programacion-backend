import express from 'express';
import productRouter from './routes/products.router.js';


const app = express();


//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/api/products', productRouter);
// app.use('/api/products', cartsRouter);

// const carts = [
//     {
//         userId: 1,
//         products: [
//             { id: 1, quantity: 2 },
//             { id: 2, quantity: 3 },
//         ],
//     },
//     {
//         userId: 2,
//         products: [
//             { id: 1, quantity: 3 },
//             { id: 3, quantity: 1 },
//             { id: 10, quantity: 4 },
//         ],
//     },
//     //... more carts...
// ]


const SERVER_PORT = 9090;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});