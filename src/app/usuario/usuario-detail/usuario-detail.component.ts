import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {

  @Input() usuarioDetail!: Usuario;
  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
