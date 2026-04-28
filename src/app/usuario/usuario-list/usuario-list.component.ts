import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit, OnDestroy {

  usuarios: Array<Usuario> = [];
  allUsuarios: Array<Usuario> = [];
  selectedUsuario!: Usuario;
  selected: boolean = false;
  private searchSub!: Subscription;

  constructor(
    private usuarioService: UsuarioService,
    private searchService: SearchService
  ) { }

  getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe((usuarios) => {
      this.allUsuarios = usuarios;
      this.usuarios = usuarios;
    });
  }

  private filterUsuarios(term: string): void {
    if (!term || term.trim() === '') {
      this.usuarios = this.allUsuarios;
      return;
    }
    const lower = term.toLowerCase();
    this.usuarios = this.allUsuarios.filter(u =>
      u.name.toLowerCase().includes(lower) ||
      u.username.toLowerCase().includes(lower) ||
      u.role.toLowerCase().includes(lower) ||
      u.location.toLowerCase().includes(lower)
    );
  }

  onSelected(usuario: Usuario): void {
    if (this.selected && this.selectedUsuario?.id === usuario.id) {
      this.selected = false;
      return;
    }
    this.selected = true;
    this.selectedUsuario = usuario;
  }

  ngOnInit() {
    this.getUsuarios();
    this.searchSub = this.searchService.searchTerm$.subscribe(term => {
      this.filterUsuarios(term);
    });
  }

  ngOnDestroy() {
    if (this.searchSub) {
      this.searchSub.unsubscribe();
    }
  }

}
