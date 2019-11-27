import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EquiposService } from './servicios/equipos.service';

import { EquiposComponent } from './componentes/equipos/equipos.component';
import { EquipodetalleComponent } from './componentes/equipodetalle/equipodetalle.component';
import { JugadordetalleComponent } from './componentes/jugadordetalle/jugadordetalle.component';
import { PartidodetalleComponent } from './componentes/partidodetalle/partidodetalle.component';
import { PartidosComponent } from './componentes/partidos/partidos.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EquiposComponent,
    EquipodetalleComponent,
    JugadordetalleComponent,
    PartidodetalleComponent,
    PartidosComponent,
    NavbarComponent,
    FooterComponent
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
