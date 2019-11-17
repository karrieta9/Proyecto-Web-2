import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'

import { EquiposService } from '../../servicios/equipos.service';

@Component({
  selector: 'app-equipodetalle',
  templateUrl: './equipodetalle.component.html',
  styleUrls: ['./equipodetalle.component.css']
})
export class EquipodetalleComponent implements OnInit {

  detalle_equipo: any = []

  constructor(private equiposService: EquiposService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;

    if(params.nombre){
      this.equiposService.getEquipo(params.nombre).subscribe(
        res => {
          this.detalle_equipo = res;
          console.log(res);
        },
        err => console.log(err)
      )
    }
    console.log(params);
  }

}
