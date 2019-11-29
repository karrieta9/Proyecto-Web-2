import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquiposComponent} from './componentes/equipos/equipos.component';
import { EquipodetalleComponent} from './componentes/equipodetalle/equipodetalle.component';
import { JugadordetalleComponent } from './componentes/jugadordetalle/jugadordetalle.component';
import { PartidosComponent } from './componentes/partidos/partidos.component';
import { PartidodetalleComponent} from './componentes/partidodetalle/partidodetalle.component';

const routes: Routes = [
  {
    path: '',
    component: EquiposComponent
  },
  {
    path: 'equipos',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'equipos/:nombre',
    component: EquipodetalleComponent
  },
  {
    path:'equipos/:nombre/jugador/:id',
    component: JugadordetalleComponent
  },
  {
    path:'equipos/:nombre/jugador',
    redirectTo: 'equipos/:nombre',
    pathMatch: 'full'
  },
  {
    path: 'equipos/:nombre/partidos',
    component: PartidosComponent
  },
  {
    path: 'equipos/:nombre/partidos/:idpartido',
    component: PartidodetalleComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
