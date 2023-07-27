import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../usuario';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css'],
})
export class PerfilUsuarioComponent implements OnInit {
  usuarioId!: number;
  usuario$!: Observable<Usuario>;

  constructor(
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.usuarioId = this.activatedRoute.snapshot.params['usuarioId'];
    this.usuario$ = this.usuarioService.buscaUsuarioId(this.usuarioId);
  }

  atualizarUsuario(){
    this.route.navigate(['','atualizarUsuario',this.usuarioId])
  }

  atualizarEndereco(idEndereco: number){
    this.route.navigate(['','atualilzarEndereco',idEndereco])
  }
}
