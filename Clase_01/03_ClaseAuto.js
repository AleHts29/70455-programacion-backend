class Auto {
    // Constructor
    constructor(color, marca) {
        this.color = color;
        this.marca = marca;
    }



    // Los Metodos son funciones
    frenar() {
        return "Se frena el auto"
    }

    acelerar() {
        return `Se acelera el auto de color ${this.color}`
    }
}


// Crear un objeto instanciando la clase Auto
const newAuto1 = new Auto('Negro', "Peugeot")
const newAuto2 = new Auto('Azul', "Ford")
const newAuto3 = new Auto('Amarillo', "Tesla")

console.log(newAuto1);
console.log(newAuto2);
console.log(newAuto3);


console.log(newAuto1.acelerar());
console.log(newAuto3.acelerar());


