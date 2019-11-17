import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquiposComponent } from './componentes/equipos/equipos.component';

import { EquiposService } from './servicios/equipos.service';
import { EquipodetalleComponent } from './componentes/equipodetalle/equipodetalle.component';

@NgModule({
  declarations: [
    AppComponent,
    EquiposComponent,
    EquipodetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    EquiposService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
