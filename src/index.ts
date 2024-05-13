import { IMensaje } from "./models/IMensaje";
import { Mensaje } from "./models/Mensaje";

//Utilizando solo interfaces
const mensaje: IMensaje = {
    texto: "Amigo",
    fechaMensaje: new Date(),
    emisor: "Persona 1",
    receptor: "Persona 2"
}

//Utilizando clases con interface
const mensaje2: IMensaje = new Mensaje("Amigo", "Persona 1", "Persona 3")

function saludar(saludo: IMensaje): string {

    const saludoCompleto = `Hola ${saludo.texto}`
    console.log(saludoCompleto, `Un saludo para ti ${saludo.receptor} de parte de mi ${saludo.emisor}`);
    console.log(saludo.fechaMensaje.toLocaleDateString());
    return saludoCompleto
}

saludar(mensaje)
saludar(mensaje2)