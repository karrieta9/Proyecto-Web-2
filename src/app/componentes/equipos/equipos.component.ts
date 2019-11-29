import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EquiposService } from '../../servicios/equipos.service';
import { FavoritosService } from '../../servicios/favoritos.service';
import { zip } from 'rxjs';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipos: any = []

  constructor(private equiposService: EquiposService, private favoritosService: FavoritosService, private router: Router) { }


  ngOnInit() {
    this.equiposService.getEquipos().subscribe(
      res => {
        this.equipos = res;
      },
      err => console.log(err)
    );
    (this.favoritosService.getFavoritos_LocalStorage());
  }

  mostrarEquipo(nombre: string) {
    let name = nombre.replace(" ", "_");
    this.router.navigate(['/equipos/', name]);
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

}
