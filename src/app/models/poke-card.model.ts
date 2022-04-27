export class PokeCard{
    img!: string;
    id!:string;

    name!:string;
    type!:[string];
  
    constructor(img: string, id: string, name: string, type: [string]) {
        this.img = img;
        this.id = id;
        this.type = type;
     
        this.name = name;
    }
   
}