import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { EquiposService } from '../../servicios/equipos.service';
import { zip } from 'rxjs';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipos: any = []

  constructor(private equiposService: EquiposService, private router:Router) {}
  

  ngOnInit() {
    this.equiposService.getEquipos().subscribe(
      res => {
        this.equipos = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

  mostrarEquipo(nombre:string){
    let name = nombre.replace(" ", "_");

    console.log(name);
    this.router.navigate(['/equipos/',name]);
  }

}
