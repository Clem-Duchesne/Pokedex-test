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
  public pokemonListByChange:{img:string,id:string,name:string, type:[string]}[] =[];
  public item!: PokeCard;

  private _url:string = "./assets/json/seed.json";
  selectedType!: string;
  inputName!:string;
  inputId!:number;
  
  ngOnInit(): void {

  }
  onNameChange(event : any): void { 
    if(event.target.value != ""){
      this.pokemonList = pokemons;
      this.inputName = event.target.value.toLowerCase();
      this.pokemonListByChange = [];
      this.pokemonList.forEach((mypokemon) =>{
        if(mypokemon.name.toLowerCase().includes(this.inputName))
          this.pokemonListByChange.push(mypokemon);
          
      });
      this.pokemonList = this.pokemonListByChange;
    }
    else{
      this.pokemonList = pokemons;
    }
      
  }
  onNumberChange(event : any):void {
    if(event.target.value != ""){
      this.pokemonList = pokemons;
      this.inputId = event.target.value;
      this.pokemonListByChange = [];
      this.pokemonList.forEach((mypokemon) =>{
        var pokemonId = Number(mypokemon.id);
        if(pokemonId == this.inputId)
          this.pokemonListByChange.push(mypokemon);
          
      });
      this.pokemonList = this.pokemonListByChange;
    }
    else{
      this.pokemonList = pokemons;
    }

  }
  onSelectedTypeValue(event: any) :void{
    if(event.target.value != "default"){
      this.selectedType = event.target.value;
      this.pokemonListByChange = [];
      this.pokemonList.forEach((mypokemon) =>{
        mypokemon.type.forEach((t)=>{
          if(t == this.selectedType)
          this.pokemonListByChange.push(mypokemon);
        
        });
      });
      this.pokemonList = this.pokemonListByChange;
    }
    else{
      this.pokemonList = pokemons;
    }
      
      
    
    
  }
}
