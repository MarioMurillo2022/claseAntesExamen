"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mensaje_1 = require("./models/Mensaje");
//Utilizando solo interfaces
const mensaje = {
    texto: "Amigo",
    fechaMensaje: new Date(),
    emisor: "Persona 1",
    receptor: "Persona 2"
};
//Utilizando clases con interface
const mensaje2 = new Mensaje_1.Mensaje("Amigo", "Persona 1", "Persona 3");
function saludar(saludo) {
    const saludoCompleto = `Hola ${saludo.texto}`;
    console.log(saludoCompleto, `Un saludo para ti ${saludo.receptor} de parte de mi ${saludo.emisor}`);
    console.log(saludo.fechaMensaje.toLocaleDateString());
    return saludoCompleto;
}
saludar(mensaje);
saludar(mensaje2);
