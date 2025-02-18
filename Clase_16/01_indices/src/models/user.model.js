import mongoose from "mongoose";


const userCollection = 'users'


const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        index: true
    },
    last_name: String,
    email: {
        type: String,
        // unique: true, // Agrega index por default
        required: [true, "correo es requerido"]
    },
    gender: String
})


export const userModel = mongoose.model(userCollection, userSchema)