class Persona {

    // Variable estática accesible por todas las instancias
    static numeroPersonas = 0;


    // Constructor para inicializar la instancia con un nombre
    constructor(nombre) {
        this.nombre = nombre;
        Persona.numeroPersonas++; // Incrementa la variable estática cada vez que se crea una instancia
    }


    // Método para mostrar el nombre de la persona
    mostrarNombre() {
        console.log(`Mi nombre es: ${this.nombre}`);
    }


    // Método estático para acceder al contador de personas
    static mostrarNumeroPersonas() {
        console.log(`Hay ${Persona.numeroPersonas} personas creadas.`);
    }
}



// Crear objetos de la clase Persona
const persona1 = new Persona("Juan");
const persona2 = new Persona("Juan");
const persona3 = new Persona("Maria");


// Mostrar el nombre de cada persona
persona1.mostrarNombre();
persona2.mostrarNombre();
persona3.mostrarNombre();


// Comprobar la individualidad entre las instancias
console.log("individualidad de instancias", persona1 === persona2);



// Usar la variable estática
Persona.mostrarNumeroPersonas()