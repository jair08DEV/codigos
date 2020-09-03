import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './ENTRADAS/inicio/inicio.component';
import { AdministracionComponent } from './ENTRADAS/administracion/administracion.component';
import { SextoAgregarComponent } from './601/sexto-agregar/sexto-agregar.component';


const routes: Routes = [
  
  {path: '', component : InicioComponent },
  {path: 'inicio', component : InicioComponent },

  // Administracion
  {path: 'administracion', component : AdministracionComponent },
  {path: 'agregar/sexto', component : SextoAgregarComponent },

  
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
