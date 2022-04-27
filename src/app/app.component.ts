import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import pokemons from './../assets/json/seed.json';
import { PokeCard } from './models/poke-card.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  public pokemonList:{img:string,id:string,name:string, type:[string]}[] = pokemons;
  public item!: PokeCard;
  private _url:string = "./assets/json/seed.json";


  ngOnInit(): void {

  }
  onNameChange(): void {

  }
  onNumberChange():void {
    
  }
  onSelectedTypeValue(): void{
    
  }
}
