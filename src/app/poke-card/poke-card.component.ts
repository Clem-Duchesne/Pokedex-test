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
  type!:[string];
  name!:string;

  @Input('pokeCard') item: any;

  
  ngOnInit() {
    
  }
  

}

