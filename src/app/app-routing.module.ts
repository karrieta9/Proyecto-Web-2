import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquiposComponent} from './componentes/equipos/equipos.component';
import { EquipodetalleComponent} from './componentes/equipodetalle/equipodetalle.component';
import { JugadordetalleComponent } from './componentes/jugadordetalle/jugadordetalle.component';
import { PartidosComponent } from './componentes/partidos/partidos.component';
import { PartidodetalleComponent} from './componentes/partidodetalle/partidodetalle.component';
import { LigasComponent } from './componentes/ligas/ligas.component';

const routes: Routes = [
  {
    path: '',
    component: LigasComponent
  },
  {
    path: 'ligas/',
    redirectTo: '',
    pathMatch: 'full'
  },
  // {
  //   path: 'equipos',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
  {
    path: 'ligas/:id/equipos',
    component: EquiposComponent
  },
  {
    path: 'ligas/:id/',
    redirectTo: 'ligas/:id/equipos',
    pathMatch: 'full'
  },
  {
    path: 'ligas/:id/equipos/:nombre',
    component: EquipodetalleComponent
  },
  // {
  //   path:'ligas/:id/equipos/:nombre/jugador/:idjugador',
  //   component: JugadordetalleComponent
  // },
  // {
  //   path:'ligas/:id/equipos/:nombre/jugador',
  //   redirectTo: 'equipos/:nombre',
  //   pathMatch: 'full'
  // },
  {
    path: 'ligas/:id/equipos/:nombre/partidos',
    component: PartidosComponent
  },
  {
    path: 'ligas/:id/equipos/:nombre/partidos/:idpartido',
    component: PartidodetalleComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
