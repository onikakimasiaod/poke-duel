export class Pokemon {
    pokedexNumber?: Number;
    name?: string;
    type?: string;
    speed?: number;
    img3d?: string;
    imgSvg?: string;
    imgFront?: string;
    imgBack?: string;

    constructor(pokedexNumber: number, name: string, type: string, speed: number, img3d: string, imgSvg: string, imgFront: string, imgBack: string ) {
        this.pokedexNumber = pokedexNumber;
        this.name = name;
        this.type = type;
        this.speed = speed;
        this.img3d = img3d;
        this.imgSvg = imgSvg;
        this.imgFront = imgFront;
        this.imgBack = imgBack;
    }
}