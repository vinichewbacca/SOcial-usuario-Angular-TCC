import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Atendimento } from 'src/app/atendimento/atendimento';
import { AtendimentoService } from 'src/app/atendimento/atendimento.service';
import { Mensagem } from 'src/app/componentes/modal-mensagem/mensagem';
import { ModalMensagemComponent } from 'src/app/componentes/modal-mensagem/modal-mensagem.component';
import { UsuarioService } from 'src/app/usuario/service/usuario.service';

@Component({
  selector: 'app-novo-atendimento',
  templateUrl: './novo-atendimento.component.html',
  styleUrls: ['./novo-atendimento.component.css'],
})
export class NovoAtendimentoComponent implements OnInit {
  hide = true;
  atendimentoForm!: FormGroup;
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

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  constructor(
    private formBuilder: FormBuilder,
    private rota: Router,
    private atendimentoService: AtendimentoService,
    private usuarioService: UsuarioService,
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formulario();
  }

  id$ = this.activatedRoute.snapshot.params['idUsuario']
  mensagem: Mensagem = {
    titulo: 'SOcial',
    texto:
      'Atendimento ja agendado para esse dia, por favor escolha uma nova data ou um novo horário.',
  };

  formulario() {

    this.atendimentoForm = this.formBuilder.group({
      dataAgendamento: ['', [Validators.required]],
      horaAgendamento: ['', [Validators.required]],
      descricaoAtendimento: ['', [Validators.required]],
      tipoAtendimento: ['', [Validators.required]],
      idUsuario: [this.id$],
    });
    this.atendimentoForm.get('dataAgendamento')?.disable();
  }

  agendarAtendimmento() {
    if (this.atendimentoForm.valid) {
      const novo = this.atendimentoForm.getRawValue() as Atendimento;

      this.atendimentoService.salvarAgendamento(novo).subscribe(
        () => {
          this.rota.navigate(['', 'atendimento']);
        },
        (error) => {
          this.dialog.open(ModalMensagemComponent).componentInstance.msgModal =
            this.mensagem;
        }
      );
    }
  }
}
