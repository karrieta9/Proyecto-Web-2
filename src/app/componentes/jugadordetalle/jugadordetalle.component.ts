import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { EquiposService } from '../../servicios/equipos.service';

@Component({
  selector: 'app-jugadordetalle',
  templateUrl: './jugadordetalle.component.html',
  styleUrls: ['./jugadordetalle.component.css']
})
export class JugadordetalleComponent implements OnInit {

  detalle_jugador: any = []

  constructor(private equiposService: EquiposService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;

    if (params.nombre && params.id) {
      this.equiposService.getJugador(params.id).subscribe(
        res => {
          this.detalle_jugador = res;
        },
        err => console.log(err)
      )
    }

  }

}
