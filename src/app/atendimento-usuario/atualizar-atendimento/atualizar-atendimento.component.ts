import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Atendimento } from 'src/app/atendimento/atendimento';
import { AtendimentoService } from 'src/app/atendimento/atendimento.service';
import { Observable } from 'rxjs';
import { Mensagem } from 'src/app/componentes/modal-mensagem/mensagem';
import { ModalMensagemComponent } from 'src/app/componentes/modal-mensagem/modal-mensagem.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-atualizar-atendimento',
  templateUrl: './atualizar-atendimento.component.html',
  styleUrls: ['./atualizar-atendimento.component.css'],
})
export class AtualizarAtendimentoComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private atendimentoService: AtendimentoService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  id: number = this.activatedRoute.snapshot.params['atmCdg'];
  atendimento$!: Observable<Atendimento>;
  agendamentoForm!: FormGroup;
  hide = true;
  minDate = new Date();
  hora: string[] = [
    '07:30',
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
  ];

  ngOnInit(): void {
    this.atendimento$ = this.atendimentoService.buscarID(this.id);
    this.formulario();
  }

  formulario() {
    this.atendimentoService.buscarID(this.id).subscribe((dado: Atendimento) => {
      this.agendamentoForm = this.formBuilder.group({
        dataAgendamento: [dado.dataAgendamento],
        horaAgendamento: [dado.horaAgendamento],
        descricaoAtendimento: [dado.descricaoAtendimento],
        tipoAtendimento: [dado.tipoAtendimento],
        id: [dado.id],
      });
      this.agendamentoForm.get('dataAgendamento')?.disable();
    });
  }

  atualizarAgendamento() {
    const aten = this.agendamentoForm.getRawValue() as Atendimento;
    this.atendimentoService.atualizarUsuario(this.id, aten).subscribe(
      () => {
        this.route.navigate(['', 'atendimento']);
      },
      (error) => {
        this.dialog.open(ModalMensagemComponent).componentInstance.msgModal =
          this.mensagem;
      }
    );
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  mensagem: Mensagem = {
    titulo: 'SOcial',
    texto:
      'Atendimento ja agendado para esse dia, por favor escolha uma nova data ou um novo horário.' +
      ' Ou pressione voltar para sair da tela de edição',
  };
}
