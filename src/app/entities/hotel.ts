export class Hotel {
    public id: number = 0;
    public photo: string = "";

    constructor(photo: string, id: number = 0){
        this.id = id;
        this.photo = photo;
    }
}
