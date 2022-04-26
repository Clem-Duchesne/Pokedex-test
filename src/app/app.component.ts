import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from './IPokemon';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  private _url:string = "./assets/json/seed.json";

  constructor(private http : HttpClient){

  }
  getPokemons(): Observable<IPokemon[]>{
    return this.http.get<IPokemon[]>(this._url);
  }
}
