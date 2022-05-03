import { Habitaciones } from "./habitaciones";
import { Time } from '@angular/common';

export class Reserva {
    public id: number = 0;
    public nombre: string = "";
    public entrada: Date = new Date();
    public salida: Date = new Date();
    public pais: string = "";
    public horario: string = "";
    public tranfer: boolean = false;
    public telefono: string = "";
    public email: string = "";
    public totalDinero: string = ""
    public habitacion: Habitaciones = new Habitaciones();

    constructor(nombre: string = "", entrada: Date = new Date(), salida: Date = new Date(), pais: string = "", horario: string = "", tranfer: boolean = false, telefono: string = "", email: string = "", habitacion: Habitaciones = new Habitaciones(), id: number = 0, totaldinero: string = "1000") {
      this.id = id;
      this.nombre = nombre;
      this.entrada = entrada;
      this.salida = salida;
      this.pais = pais;
      this.horario = horario;
      this.tranfer = tranfer;
      this.telefono = telefono;
      this.email = email;
      this.totalDinero = totaldinero;
      this.habitacion = habitacion;
    }
}
