class TicketManager {
    // Variable privada precioBaseDeGanancia
    #precioBaseDeGanancia = 0.15;

    constructor() {
        this.eventos = [];
        this.idCounter = 1; // Para manejar el id autoincrementable
    }


    // Método para obtener los eventos guardados
    getEventos() {
        return this.eventos;
    }


    // Método para agregar un nuevo evento
    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
        // Logica
    }


    // Método para agregar un usuario a un evento
    agregarUsuario(idEvento, idUsuario) {
        // Logica
    }


    // Método para poner un evento en gira
    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
        // Logica
    }



}




// Ejemplo de uso
const manager = new TicketManager();

// Agregar eventos
manager.agregarEvento('Concierto de Rock', 'Madrid', 100);
manager.agregarEvento('Conferencia Tech', 'Barcelona', 50);

// Ver eventos
console.log(manager.getEventos());

// Agregar un usuario a un evento
console.log(manager.agregarUsuario(1, 101));
console.log(manager.agregarUsuario(1, 102));

// Poner evento en gira
console.log(manager.ponerEventoEnGira(1, 'Valencia', new Date('2024-12-01')));

// Ver eventos después de la gira
console.log(manager.getEventos());