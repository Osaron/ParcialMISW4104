import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repositorio } from '../repositorio';
import { RepositorioService } from '../repositorio.service';

@Component({
  selector: 'app-repositorio-detail',
  templateUrl: './repositorio-detail.component.html',
  styleUrls: ['./repositorio-detail.component.css']
})
export class RepositorioDetailComponent implements OnInit {

  repositorioDetail: Repositorio | undefined;

  constructor(
    private route: ActivatedRoute,
    private repositorioService: RepositorioService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.getRepositorio(id);
      }
    });
  }

  getRepositorio(id: number) {
    this.repositorioService.getRepositorio(id).subscribe(repo => {
      this.repositorioDetail = repo;
    });
  }
}
