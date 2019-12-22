import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { EquiposService } from '../../servicios/equipos.service';
import { DatoNavService } from 'src/app/servicios/dato-nav.service';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {

  partidos:any=[];
  equipo:any=[];
  cont:number=0;
  name:string = '';
  id:string='';

  constructor(private equiposService:EquiposService, private activatedRoute:ActivatedRoute, private datoNavService:DatoNavService) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;

    if (params.nombre && params.id) {
      this.datoNavService.idLiga = params.id
      this.datoNavService.stringLogo = (this.datoNavService.buscarLiga(params.id).logo)
      this.datoNavService.cambiarFondo(this.datoNavService.buscarLiga(params.id).bg);
      this.name = params.nombre;
      this.id = params.id;
      this.equiposService.getPartidos(params.id).subscribe(
        res => {
          this.partidos = res;

          this.equiposService.getEquipo(params.nombre).subscribe(
            res => {
              this.equipo = res;
            },
            err => console.log(err)
          )
        },
        err => console.log(err)
      )
    }

  }

}
