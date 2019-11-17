import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  API_URI = 'https://www.thesportsdb.com/api/v1/json';

  constructor(private http: HttpClient) { }

  getEquipos(){
    return this.http.get(`${this.API_URI}/1/search_all_teams.php?l=English%20Premier%20League`)
  }

  getEquipo(nombre: string){
    // let name = nombre.replace(" ", "_");
    return this.http.get(`${this.API_URI}/1/searchteams.php?t=${nombre}`)
  }
}
