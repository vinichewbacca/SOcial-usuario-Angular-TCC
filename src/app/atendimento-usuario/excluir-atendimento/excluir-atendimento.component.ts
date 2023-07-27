import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Atendimento } from 'src/app/atendimento/atendimento';
import { AtendimentoService } from 'src/app/atendimento/atendimento.service';
import { UsuarioService } from 'src/app/usuario/service/usuario.service';

@Component({
  selector: 'app-excluir-atendimento',
  templateUrl: './excluir-atendimento.component.html',
  styleUrls: ['./excluir-atendimento.component.css'],
})
export class ExcluirAtendimentoComponent implements OnInit {
  usuario$ = this.usuarioService.retornaUsuario();

  constructor(
    private atendimentoService: AtendimentoService,
    private route: Router,
    private usuarioService: UsuarioService
  ) {}

  @Input() agendamento!: Atendimento;
  ngOnInit(): void {}

  excluirAgendamento(idUsuario: number): void {
    this.atendimentoService
      .excluirAgendamento(this.agendamento.id as number, this.agendamento, idUsuario)
      .subscribe(() => {
        this.route.navigate(['atendimento', '']);
      });
  }

  cancelarAgendamento(idTecnico: number): void {
    this.atendimentoService
      .cancelaAgendamento(this.agendamento.id as number, this.agendamento, idTecnico)
      .subscribe(() => {
        this.route.navigate(['atendimento', '']);
      });
  }
}
