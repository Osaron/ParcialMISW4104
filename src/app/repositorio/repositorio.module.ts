import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RepositorioListComponent } from './repositorio-list/repositorio-list.component';
import { RepositorioDetailComponent } from './repositorio-detail/repositorio-detail.component';

@NgModule({
  declarations: [
    RepositorioListComponent,
    RepositorioDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RepositorioListComponent
  ]
})
export class RepositorioModule { }
