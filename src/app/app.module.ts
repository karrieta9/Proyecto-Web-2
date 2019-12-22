import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

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
import { NavequipoComponent } from './componentes/navequipo/navequipo.component';
import { LigasComponent } from './componentes/ligas/ligas.component';

@NgModule({
  declarations: [
    AppComponent,
    EquiposComponent,
    EquipodetalleComponent,
    JugadordetalleComponent,
    PartidodetalleComponent,
    PartidosComponent,
    NavbarComponent,
    FooterComponent,
    NavequipoComponent,
    LigasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2PageScrollModule
  ],
  providers: [
    EquiposService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
