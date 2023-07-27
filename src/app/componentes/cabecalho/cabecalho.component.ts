import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../usuario/service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent {
  usuario$ = this.usuarioService.retornaUsuario();
  constructor(private usuarioService: UsuarioService, private router: Router) {}
  logout() {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }
}
