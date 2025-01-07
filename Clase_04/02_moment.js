const moment = require('moment');


const fechaActual = moment()


console.log(fechaActual);

// Almacenar la fecha de nacimiento (ejemplo: 15 de marzo de 1990)
const fechaNacimiento = moment('1990-03-15', 'YYYY-MM-DD')



// Validar si la fecha de nacimiento es válida
if (fechaNacimiento.isValid()) {
    console.log("La fecha de nacimiento es válida");


    // Calcular la diferencia en días entre la fecha de nacimiento y la fecha actual

    const diferenciaDias = fechaActual.diff(fechaNacimiento, 'days')
    console.log(`La diferencia en días entre la fecha actual y la fecha de nacimiento es: ${diferenciaDias} días`);
} else {
    console.log("La fecha de nacimiento no es válida");
}