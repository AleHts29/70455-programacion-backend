console.log("Test_01");
console.log(1);
console.log(true);
console.log(null);
console.log(undefined);
console.log([1, 2, 3, 4, 5]);
console.log({ name: "John Doe", age: 30 });



let name;
name = "John Doe";
console.log(typeof name);
name = 123

console.log(typeof name);


const objeto = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York"
    }
}

console.log(objeto);
console.log(typeof objeto);


const array = [1, 2, 3, 4, 5, "Hola"]

console.log(array);
console.log(typeof array);



// =================================

let obj1 = {
    name: "John Doe",
    age: 30
}

console.log("obj1", obj1); // ? --> { name: "John Doe, age: 30}

let obj2 = obj1
console.log("obj2", obj2); // ? --> { name: "John Doe, age: 30}

// Modificaciones las realice en el obj2
obj2.name = "Elias"
obj2.pais = "Argentina"

console.log("obj2 con pais:", obj2); // ? --> obj2 con pais: { name: 'Elias', age: 30, pais: 'Argentina' }


obj1.name = "Jose"
console.log("obj1", obj1); // ?


console.log("obj2 con pais:", obj2);