import { Component, OnInit } from '@angular/core';
import { DatoNavService } from 'src/app/servicios/dato-nav.service';

@Component({
  selector: 'app-ligas',
  templateUrl: './ligas.component.html',
  styleUrls: ['./ligas.component.css']
})
export class LigasComponent implements OnInit {

   

  constructor(public datoNavService:DatoNavService) { }

  ngOnInit() {
    this.datoNavService.idLiga = ''
    this.datoNavService.stringLogo = ''
    this.datoNavService.cambiarFondo("./assets/img/bg.jpg");

  }
  
  
}
