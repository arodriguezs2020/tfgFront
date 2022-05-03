export class Contact {
    public nombre: string = "";
    public email: string = "";
    public asunto: string = "";
    public message: string = "";

    constructor(nombre: string = "", email: string = "", asunto: string = "", message: string = "") {
      this.nombre = nombre;
      this.email = email;
      this.asunto = asunto;
      this.message = message;
    }
}
