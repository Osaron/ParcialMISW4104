import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repositorio } from '../repositorio';
import { RepositorioService } from '../repositorio.service';
import { Usuario } from '../../usuario/usuario';
import { UsuarioService } from '../../usuario/usuario.service';

@Component({
  selector: 'app-repositorio-detail',
  templateUrl: './repositorio-detail.component.html',
  styleUrls: ['./repositorio-detail.component.css']
})
export class RepositorioDetailComponent implements OnInit {

  repositorioDetail: Repositorio | undefined;
  owner: Usuario | undefined;

  constructor(
    private route: ActivatedRoute,
    private repositorioService: RepositorioService,
    private usuarioService: UsuarioService
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
      if (repo?.ownerId) {
        this.loadOwner(repo.ownerId);
      }
    });
  }

  private loadOwner(ownerId: number) {
    this.usuarioService.getUsuarios().subscribe(usuarios => {
      this.owner = usuarios.find(u => u.id === ownerId);
    });
  }
}
