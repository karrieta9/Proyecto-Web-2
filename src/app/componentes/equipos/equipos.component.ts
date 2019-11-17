import { Component, OnInit } from '@angular/core';

import { EquiposService } from '../../servicios/equipos.service';
import { zip } from 'rxjs';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipos: any = []

  constructor(private equiposService: EquiposService) {}
  

  ngOnInit() {
    this.equiposService.getEquipos().subscribe(
      res => {
        this.equipos = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

}
