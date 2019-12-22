import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  API_URI = 'https://www.thesportsdb.com/api/v1/json';

  constructor(private http: HttpClient) { }

  getEquipos(id:string){
    return this.http.get(`${this.API_URI}/1/lookup_all_teams.php?id=${id}`);
  }

  getTablaPosiciones(id:string){
    return this.http.get(`${this.API_URI}/1/lookuptable.php?l=${id}&s=1920`);
  }


  getEquipo(nombre: string){
    return this.http.get(`${this.API_URI}/1/searchteams.php?t=${nombre}`);
  }

  getEquipoId(id: string){
    return this.http.get(`${this.API_URI}/1/lookupteam.php?id=${id}`);
  }

  getJugadores(id: string){
    return this.http.get(`${this.API_URI}/1/lookup_all_players.php?id=${id}`);
  }

  getJugador(id:string){
    return this.http.get(`${this.API_URI}/1/lookupplayer.php?id=${id}`);
  }

  getUltimos5(id:string){
    return this.http.get(`${this.API_URI}/1/eventslast.php?id=${id}`);
  }

  getProximos5(id:string){
    return this.http.get(`${this.API_URI}/1/eventsnext.php?id=${id}`);
  }

  getPartidos(id:string){
    return this.http.get(`${this.API_URI}/1/eventsseason.php?id=${id}&s=1920`);
  }

  getPartido(id:string){
    return this.http.get(`${this.API_URI}/1/lookupevent.php?id=${id}`);
  }
}
