import { Component, OnInit } from '@angular/core';
import { Repositorio } from '../repositorio';
import { RepositorioService } from '../repositorio.service';

@Component({
  selector: 'app-repositorio-list',
  templateUrl: './repositorio-list.component.html',
  styleUrls: ['./repositorio-list.component.css']
})
export class RepositorioListComponent implements OnInit {

  repositorios: Array<Repositorio> = [];

  constructor(private repositorioService: RepositorioService) { }

  getRepositorios(): void {
    this.repositorioService.getRepositorios().subscribe((repositorios) => {
      this.repositorios = repositorios;
    });
  }

  ngOnInit() {
    this.getRepositorios();
  }

}
