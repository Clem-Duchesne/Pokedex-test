import { Component, OnInit, Input} from '@angular/core';
import { PokeCard } from '../models/poke-card.model';

@Component({
  selector: 'poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})

export class PokeCardComponent implements OnInit{
  @Input () pokeCard! : PokeCard
  img!: string;
  id!:number;
  type!:string;
  name!:string;


  
  ngOnInit() {
    this.img = "http://img.pokemondb.net/artwork/bulbasaur.jpg";
    this.name = "Bulbi";
    this.id = 1;
    this.type ="water";
  }
  

}

