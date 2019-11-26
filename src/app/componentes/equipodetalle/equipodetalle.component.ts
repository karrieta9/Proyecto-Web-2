import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { EquiposService } from '../../servicios/equipos.service';

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

  constructor(private equiposService: EquiposService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;

    if (params.nombre) {
      this.name = params.nombre;
      this.equiposService.getEquipo(params.nombre).subscribe(
        res => {
          this.detalle_equipo = res;
          console.log(res);

          this.equiposService.getJugadores(res['teams'][0]['idTeam']).subscribe(
            res => {
              this.jugadores = res;
              console.log(res);
            },
            err => console.log(err)
          )

          this.equiposService.getUltimos5(res['teams'][0]['idTeam']).subscribe(
            res => {
              this.ultimos5 = res;
              console.log(res);
            },
            err => console.log(err)
          )

          this.equiposService.getProximos5(res['teams'][0]['idTeam']).subscribe(
            res => {
              this.proximos5 = res;
              console.log(res);
            },
            err => console.log(err)
          )

          this.equiposService.getTablaPosiciones().subscribe(
            res => {
              this.tabla = res;
              console.log(res);
            },
            err => console.log(err)
          )

        },
        err => console.log(err)
      )
    }

    console.log(params);
  }

}
