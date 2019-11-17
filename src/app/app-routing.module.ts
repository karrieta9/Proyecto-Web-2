import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquiposComponent} from './componentes/equipos/equipos.component';
import { EquipodetalleComponent} from './componentes/equipodetalle/equipodetalle.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
