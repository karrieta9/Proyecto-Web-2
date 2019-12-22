import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { EquiposService } from '../../servicios/equipos.service';
import { DatoNavService } from 'src/app/servicios/dato-nav.service';

@Component({
  selector: 'app-jugadordetalle',
  templateUrl: './jugadordetalle.component.html',
  styleUrls: ['./jugadordetalle.component.css']
})
export class JugadordetalleComponent implements OnInit {

  detalle_jugador: any = []

  constructor(private equiposService: EquiposService, private activatedRoute: ActivatedRoute,  private datoNavService:DatoNavService) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;

    if (params.nombre && params.id && params.idjugador) {
      this.datoNavService.idLiga = params.id
      this.datoNavService.stringLogo = (this.datoNavService.buscarLiga(params.id).logo)
      this.datoNavService.cambiarFondo(this.datoNavService.buscarLiga(params.id).bg);
      this.equiposService.getJugador(params.idjugador).subscribe(
        res => {
          this.detalle_jugador = res;
        },
        err => console.log(err)
      )
    }

  }

}
