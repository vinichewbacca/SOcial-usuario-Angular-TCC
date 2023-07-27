import { Atendimentos } from './../../atendimento/atendimento';
import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from 'src/app/atendimento/atendimento.service';

@Component({
  selector: 'app-lista-tecnico',
  templateUrl: './lista-tecnico.component.html',
  styleUrls: ['./lista-tecnico.component.css'],
})
export class ListaTecnicoComponent implements OnInit {
  constructor(private atendimentoService: AtendimentoService) {}
  data = new Date();

  ngOnInit(): void {}

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
