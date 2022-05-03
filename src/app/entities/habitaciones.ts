export class Habitaciones {
    public id: number = 0;
    public nombre: string = "";
    public descripcion: string = "";
    public precio: number = 0;
    public photo: string = "";
    public tipo: string = "Normal";
    public huespedes: number = 2;

    constructor(nombre: string = "", description: string = "", precio: number = 0, photo: string = "", tipo: string = "Normal", huespedes: number = 2, id: number = 0) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = description;
        this.precio = precio;
        this.photo = photo;
        this.tipo = tipo;
        this.huespedes = huespedes;
    }
}
