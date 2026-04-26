import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RepositorioDetailComponent } from './repositorio/repositorio-detail/repositorio-detail.component';

const routes: Routes = [
  { path: 'repositorios/:id', component: RepositorioDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
