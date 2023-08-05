import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Atendimentos } from 'src/app/atendimento/atendimento';
import { AtendimentoService } from 'src/app/atendimento/atendimento.service';
import { UsuarioService } from 'src/app/usuario/service/usuario.service';
import { Usuario } from 'src/app/usuario/usuario';

@Component({
  selector: 'app-lista-tecnico',
  templateUrl: './lista-tecnico.component.html',
  styleUrls: ['./lista-tecnico.component.css'],
})
export class ListaTecnicoComponent implements OnInit {
  constructor(
    private atendimentoService: AtendimentoService,
    private usuarioService: UsuarioService
  ) {}
  data = new Date();

  ngOnInit(): void {}

  tecnico$ = this.usuarioService.retornaUsuario().pipe(
    switchMap((usuario: Usuario) => {
      return this.usuarioService.buscaTecnicoId(usuario.id as number);
    })
  );

  //lista os agendamentos do tecnico logado no sistema
  listaTecnico$ = this.usuarioService.retornaUsuario().pipe(
    switchMap((user: Usuario) => {
      return this.atendimentoService.listaAtendimentoTecnico(user.id as number);
    })
  );
  //lista os agendamentos do dia
  listaAgendamento$ = this.atendimentoService.listaAtendimentoDataAtual();
  //lista os agendamentos do dia por tipo
  listaCadUnico$ = this.atendimentoService.listaAtendAtualTipo('CADUNICO');
  listaSocial$ = this.atendimentoService.listaAtendAtualTipo('SERVSOCIAL');
  //lista todos os agendamentos
  lista$ = this.atendimentoService.listaTudo();
  //lista todos os agendamentos encaminhados
  listaEncaminhados$ = this.atendimentoService.listaAtendimentoEncaminhado();
}
