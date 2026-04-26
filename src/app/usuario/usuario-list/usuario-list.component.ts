import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios: Array<Usuario> = [];
  selectedUsuario!: Usuario;
  selected: boolean = false;

  constructor(private usuarioService: UsuarioService) { }

  getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }

  onSelected(usuario: Usuario): void {
    this.selected = true;
    this.selectedUsuario = usuario;
  }

  ngOnInit() {
    this.getUsuarios();
  }

}
