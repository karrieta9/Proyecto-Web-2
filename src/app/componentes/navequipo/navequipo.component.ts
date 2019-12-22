import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-navequipo',
  templateUrl: './navequipo.component.html',
  styleUrls: ['./navequipo.component.css']
})
export class NavequipoComponent implements OnInit {
  @Input() name:string;

  constructor() { }

  ngOnInit() {
    
  }

}
