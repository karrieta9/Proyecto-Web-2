import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DatoNavService } from 'src/app/servicios/dato-nav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  id:string = ''

  constructor(private activatedRoute: ActivatedRoute, public datoNavService:DatoNavService) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.id = params.id 
    console.log(params)
  }

}
