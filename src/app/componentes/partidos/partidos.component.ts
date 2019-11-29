import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { EquiposService } from '../../servicios/equipos.service';

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

  constructor(private equiposService:EquiposService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;

    if (params.nombre) {
      this.name = params.nombre;
      this.equiposService.getPartidos().subscribe(
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
