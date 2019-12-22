import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

import { EquiposService } from '../../servicios/equipos.service';
import { FavoritosService } from '../../servicios/favoritos.service';
import { DatoNavService } from 'src/app/servicios/dato-nav.service';

import { zip } from 'rxjs';
@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipos: any = []
  tabla:any = [];
  partidos:any = [];
  jugados:any= [];
  id:string = ''

  constructor(private equiposService: EquiposService, public favoritosService: FavoritosService, private router: Router, private activatedRoute:ActivatedRoute, private datoNavService:DatoNavService) { }


  ngOnInit() {
    
    const params = this.activatedRoute.snapshot.params; 
    

    if (params.id) {
      this.datoNavService.idLiga = params.id
      this.datoNavService.stringLogo = (this.datoNavService.buscarLiga(params.id).logo)
      this.datoNavService.cambiarFondo(this.datoNavService.buscarLiga(params.id).bg);
      this.id = params.id;
      this.equiposService.getEquipos(params.id).subscribe(
        res => {
          this.equipos = res;    
          this.equiposService.getTablaPosiciones(params.id).subscribe(
            res => {
              this.tabla = res;  
              this.jornada()  
            },
            err => console.log(err)
          ) 

          this.equiposService.getPartidos(params.id).subscribe(
            res => {
              this.partidos = res;  
            },
            err => console.log(err)
          ) 

        },
        err => console.log(err)
      );
      (this.favoritosService.getFavoritos_LocalStorage());
    }
    
  }

  mostrarEquipo(nombre: string, id:string) {
    let name = nombre.replace(" ", "_");
    this.router.navigate(['ligas',id,'equipos', name]);
  }

  favoritos(equipo: any) {
    this.favoritosService.saveFavoritos_LocalStorage(equipo);
    (this.favoritosService.getFavoritos_LocalStorage())
  }
  eliminarFavorito(equipo: any) {
    this.favoritosService.deleteFavoritos_LocalStorage(equipo);
  }

  comparacion(equipo: any) {
    for (let i in this.favoritosService.favoritos) {
      if (this.favoritosService.favoritos[i].idTeam == equipo.idTeam) {
        return (true);
      }
    }
  }

  jornada(){
    for(let r in this.tabla.table){
      this.jugados.push(this.tabla.table[r].played);
    }

    return Math.max.apply(null, this.jugados);
  }

}
