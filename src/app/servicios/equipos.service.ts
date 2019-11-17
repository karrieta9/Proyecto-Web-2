import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  API_URI = 'https://www.thesportsdb.com/api';

  constructor(private http: HttpClient) { }

  getEquipos(){
    return this.http.get(`${this.API_URI}/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
  }

  getEquipo(nombre: string){
    return this.http.get(`${this.API_URI}/v1/json/1/searchteams.php?sname=${nombre}`)
  }
}
