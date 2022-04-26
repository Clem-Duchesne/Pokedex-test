export class PokeCard{
    img!: string;
    id!:number;
    type!:string;
    name!:string;
  
    constructor(img: string, id: number, type: string, name: string) {
        this.img = img;
        this.id = id;
        this.type = type;
        this.name = name;
    }
}