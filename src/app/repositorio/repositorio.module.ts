import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositorioListComponent } from './repositorio-list/repositorio-list.component';

@NgModule({
  declarations: [
    RepositorioListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RepositorioListComponent
  ]
})
export class RepositorioModule { }
