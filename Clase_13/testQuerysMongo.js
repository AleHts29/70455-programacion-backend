db.mascotas.insertMany([
    { nombre: "Momo", especie: "Perro", edad: 3 },
    { nombre: "Bella", especie: "Gato", edad: 2 },
    { nombre: "Luna", especie: "Perro", edad: 4 }
])

db.mascotas.findOne({ especie: "gato" });

db.mascotas.countDocuments();



// 2do CRUD con estudiantes
db.estudiantes.insertMany([
    { nombre: "Elias", apellido: "Lopez", curso: "backend", correo: "eli@gmail.com", genero: "M", edad: 30 },
    { nombre: "Laura", apellido: "Suarez", curso: "marketing", correo: "laura@gmail.com", genero: "F", edad: 23 },
    { nombre: "German", apellido: "Caicedo", curso: "backend", correo: "german@gmail.com", genero: "M", edad: 27 },
    { nombre: "Pedro", apellido: "David", curso: "backend", correo: "pedro@gmail.com", genero: "M", edad: 22 },
    { nombre: "Maria", apellido: "Dutra", curso: "react", correo: "maria@gmail.com", genero: "F", edad: 35 }
])

db.estudiantes.insertMany([
    { nombre: "Pedro", apellido: "Lopez", curso: "backend" },
    { nombre: "Laura", apellido: "Suarez", curso: "marketing" }
]);


// Filtros
// Filtrar estudiantes que están en el curso "backend" y tienen más de 25 años:
colegio > db.estudiantes.find({ $and: [{ curso: 'backend' }, { edad: { $gt: 25 } }] })
// rta: [
//   {
//     _id: ObjectId('67a401ba93988d5a63cf945c'),
//     nombre: 'Elias',
//     apellido: 'Lopez',
//     curso: 'backend',
//     correo: 'eli@gmail.com',
//     genero: 'M',
//     edad: 30
//   },
//   {
//     _id: ObjectId('67a401ba93988d5a63cf945e'),
//     nombre: 'German',
//     apellido: 'Caicedo',
//     curso: 'backend',
//     correo: 'german@gmail.com',
//     genero: 'M',
//     edad: 27
//   }
// ]


// Filtrar estudiantes que están en el curso "backend" o "react":
db.estudiantes.find({
    $or: [
        { curso: 'backend' },
        { curso: 'react' }
    ]
})


// Filtrar estudiantes que tienen menos de 30 años:
db.estudiantes.find({ edad: { $lt: 30 } })

// Filtrar estudiantes que no están en el curso "marketing":
db.estudiantes.find({ curso: { $ne: 'marketing' } })


// Filtrar estudiantes cuyo género es "F" y tienen 25 años o más:
db.estudiantes.find({ $and: [{ genero: 'F' }, { edad: { $gte: 25 } }] })


// filtro $in --> devuelve coincidencias que se encuentran en el array
db.estudiantes.find({ edad: { $in: [23, 35] } })


// PROYECCIONES
colegio > db.estudiantes.find({}, { nombre: 1, correo: 1, _id: 0 })
[
    { nombre: 'Elias', correo: 'eli@gmail.com' },
    { nombre: 'Laura', correo: 'laura@gmail.com' },
    { nombre: 'German', correo: 'german@gmail.com' },
    { nombre: 'Pedro', correo: 'pedro@gmail.com' },
    { nombre: 'Maria', correo: 'maria@gmail.com' },
    { nombre: 'Pedro' },
    { nombre: 'Laura' }
]


// ORDENAMINEMIENTO: con 1 o -1 para hacer el ordenamiento ascendente o descendente respectivamente. 
colegio > db.estudiantes.find().sort({ edad: 1 })
colegio > db.estudiantes.find({}, { nombre: 1, correo: 1, edad: 1, _id: 0 }).sort({ edad: -1 }) // ordenamiento con proyecciones
[
    { nombre: 'Maria', correo: 'maria@gmail.com', edad: 35 },
    { nombre: 'Elias', correo: 'eli@gmail.com', edad: 30 },
    { nombre: 'German', correo: 'german@gmail.com', edad: 27 },
    { nombre: 'Laura', correo: 'laura@gmail.com', edad: 23 },
    { nombre: 'Pedro', correo: 'pedro@gmail.com', edad: 22 },
    { nombre: 'Pedro' },
    { nombre: 'Laura' }
]



// SKIP
// concepto de offset
/*

4
3
2<--- Punto Inicial = offset en 2
1
0 
-1
-2
-3
-4


*/