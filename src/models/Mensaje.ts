import { IMensaje } from "./IMensaje";

export class Mensaje implements IMensaje {
    texto: string;
    fechaMensaje: Date;
    emisor: string;
    receptor: string;

    constructor(texto: string, emisor: string, receptor: string) {
        this.texto = texto
        this.fechaMensaje = new Date()
        this.emisor = emisor
        this.receptor = receptor
    }

}