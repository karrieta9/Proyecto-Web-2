import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquiposComponent} from './componentes/equipos/equipos.component';
import { EquipodetalleComponent} from './componentes/equipodetalle/equipodetalle.component';
import { JugadordetalleComponent } from './componentes/jugadordetalle/jugadordetalle.component';

const routes: Routes = [
  {
    path: '',
    component: EquiposComponent
  },
  // {
  //   path: 'equipos',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
