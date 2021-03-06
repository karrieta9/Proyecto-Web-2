import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Router} from '@angular/router';

import { EquiposService } from '../../servicios/equipos.service';
import { DatoNavService } from 'src/app/servicios/dato-nav.service';

@Component({
  selector: 'app-partidodetalle',
  templateUrl: './partidodetalle.component.html',
  styleUrls: ['./partidodetalle.component.css']
})
export class PartidodetalleComponent implements OnInit {

  detalle_partido: any = []
  local:any=[]
  visitante:any=[]
  id:string='';

  constructor(private equiposService: EquiposService, private activatedRoute: ActivatedRoute, private router:Router, private datoNavService:DatoNavService) { }

  ngOnInit() {
    
    const params = this.activatedRoute.snapshot.params;

    if (params.nombre && params.idpartido && params.id) {
      this.id = params.id
      this.datoNavService.idLiga = params.id
      this.datoNavService.stringLogo = (this.datoNavService.buscarLiga(params.id).logo)
      this.datoNavService.cambiarFondo(this.datoNavService.buscarLiga(params.id).bg);
      
      this.equiposService.getPartido(params.idpartido).subscribe(
        res => {
          this.detalle_partido = res;
          this.equiposService.getEquipoId(res['events'][0]['idHomeTeam']).subscribe(
            res => {
              this.local = res;
            },
            err => console.log(err)
          )

          this.equiposService.getEquipoId(res['events'][0]['idAwayTeam']).subscribe(
            res => {
              this.visitante = res;
            },
            err => console.log(err)
          )

        },
        err => console.log(err)
      )
    }
    
  }

  mostrarEquipo(nombre:string, id:string){
    let name = nombre.replace(" ", "_");
    this.router.navigate(['/ligas',id,'equipos',name]);
  }
}
