"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mensaje = void 0;
class Mensaje {
    texto;
    fechaMensaje;
    emisor;
    receptor;
    constructor(texto, emisor, receptor) {
        this.texto = texto;
        this.fechaMensaje = new Date();
        this.emisor = emisor;
        this.receptor = receptor;
    }
}
exports.Mensaje = Mensaje;
