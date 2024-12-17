//ES9
//Spread and Rest Operator 
//Tomemos un objeto de ejemplo:


let obj1 = {
    name: "John Doe",
    age: 30
}

// console.log("obj1", obj1); // ? --> { name: "John Doe, age: 30}

// // let obj2 = obj1
// let obj2 = { ...obj1 } // Usamos Spread-Operator
// console.log("obj2", obj2); // ? --> { name: "John Doe, age: 30}

// // Modificaciones las realice en el obj2
// obj2.name = "Elias"
// obj2.pais = "Argentina"

// console.log("obj2 con pais:", obj2); // ? --> obj2 con pais: { name: 'Elias', age: 30, pais: 'Argentina' }


// console.log("obj1", obj1); // ?


// obj1.name = "Jose"
// console.log("obj1", obj1); // ?


// console.log("obj2 con pais:", obj2);



// =================================================================================

//Y usemos un array de ejemplo:
// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
// const copiaArray = [nombres]
// console.log(copiaArray);



// //Usando operador Spread:
// console.log("\n************** Spread operator: ************ \n");
// const copiaArray2 = [...nombres]
// console.log(copiaArray2);




// =================================================================================

// _02
// Objects Destructuring 
// Usando el objeto persona como ejemplo:

let persona = {
    nombre: "John Doe",
    edad: 30,
    direccion: {
        calle: "123 Main St",
        ciudad: "New York"
    },
    email: 'john@example.com',
    telefono: '+1 123-456-7890',
    PostalCode: "123456"
}

const printNameStandar = (obj) => {
    console.log(obj.nombre);
}

printNameStandar(persona)



const printNameDestruc = ({ nombre }) => {
    console.log(nombre);
}

printNameDestruc(persona);



// 
const { nombre, direccion } = persona
console.log(nombre, direccion);

