import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { EquiposService } from '../../servicios/equipos.service';
import { DatoNavService } from 'src/app/servicios/dato-nav.service';

@Component({
  selector: 'app-equipodetalle',
  templateUrl: './equipodetalle.component.html',
  styleUrls: ['./equipodetalle.component.css']
})
export class EquipodetalleComponent implements OnInit {

  detalle_equipo: any = [];
  jugadores: any = [];
  ultimos5:any = [];
  proximos5:any = [];
  tabla:any = [];
  name:string = '';
  id:string = '';

  constructor(private equiposService: EquiposService, private activatedRoute: ActivatedRoute, private datoNavService:DatoNavService) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    

    if (params.nombre && params.id) {
      this.name = params.nombre;
      this.id = params.id;
      this.datoNavService.idLiga = params.id
      this.datoNavService.stringLogo = (this.datoNavService.buscarLiga(params.id).logo)
      this.datoNavService.cambiarFondo(this.datoNavService.buscarLiga(params.id).bg);
      this.equiposService.getEquipo(params.nombre).subscribe(
        res => {
          this.detalle_equipo = res;
          // this.equiposService.getJugadores(res['teams'][0]['idTeam']).subscribe(
          //   res => {
          //     this.jugadores = res;
          //   },
          //   err => console.log(err)
          // )

          this.equiposService.getUltimos5(res['teams'][0]['idTeam']).subscribe(
            res => {
              this.ultimos5 = res;
            },
            err => console.log(err)
          )

          this.equiposService.getProximos5(res['teams'][0]['idTeam']).subscribe(
            res => {
              this.proximos5 = res;
            },
            err => console.log(err)
          )

          this.equiposService.getTablaPosiciones(params.id).subscribe(
            res => {
              this.tabla = res;
            },
            err => console.log(err)
          )

        },
        err => console.log(err)
      )
    }

  }

}
