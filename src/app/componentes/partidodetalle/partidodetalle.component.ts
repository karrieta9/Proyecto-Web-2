import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Router} from '@angular/router';

import { EquiposService } from '../../servicios/equipos.service';

@Component({
  selector: 'app-partidodetalle',
  templateUrl: './partidodetalle.component.html',
  styleUrls: ['./partidodetalle.component.css']
})
export class PartidodetalleComponent implements OnInit {

  detalle_partido: any = []
  local:any=[]
  visitante:any=[]

  constructor(private equiposService: EquiposService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    
    const params = this.activatedRoute.snapshot.params;
    console.log(params);

    if (params.nombre && params.idpartido) {
      
      this.equiposService.getPartido(params.idpartido).subscribe(
        res => {
          this.detalle_partido = res;
          console.log(res);
          this.equiposService.getEquipoId(res['events'][0]['idHomeTeam']).subscribe(
            res => {
              this.local = res;
              console.log(res);
            },
            err => console.log(err)
          )

          this.equiposService.getEquipoId(res['events'][0]['idAwayTeam']).subscribe(
            res => {
              this.visitante = res;
              console.log(res);
            },
            err => console.log(err)
          )

        },
        err => console.log(err)
      )
    }
    
  }

  mostrarEquipo(nombre:string){
    let name = nombre.replace(" ", "_");

    console.log(name);
    this.router.navigate(['/equipos/',name]);
  }
}
