import { Component, OnInit } from '@angular/core';
import { DatoNavService } from 'src/app/servicios/dato-nav.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public datoNavService:DatoNavService) { }

  ngOnInit() {
  }

}
