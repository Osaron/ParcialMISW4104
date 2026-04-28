import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RepositorioDetailComponent } from './repositorio/repositorio-detail/repositorio-detail.component';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { RepositorioListComponent } from './repositorio/repositorio-list/repositorio-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: UsuarioListComponent },
  { 
    path: 'repositorios', 
    component: RepositorioListComponent,
    children: [
      { path: ':id', component: RepositorioDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
