import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsuarioService } from 'src/app/usuario/service/usuario.service';
import { AtendimentoService } from 'src/app/atendimento/atendimento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Atendimento } from 'src/app/atendimento/atendimento';
import { Mensagem } from 'src/app/componentes/modal-mensagem/mensagem';
import { MatDialog } from '@angular/material/dialog';
import { ModalMensagemComponent } from 'src/app/componentes/modal-mensagem/modal-mensagem.component';

@Component({
  selector: 'app-encaminhamento-tecnico',
  templateUrl: './encaminhamento-tecnico.component.html',
  styleUrls: ['./encaminhamento-tecnico.component.css'],
})
export class EncaminhamentoTecnicoComponent implements OnInit {
  constructor(
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private atendimentoService: AtendimentoService,
    private activatetdRoute: ActivatedRoute,
    private route: Router,
    private dialog: MatDialog
  ) {}

  codigo: number = this.activatetdRoute.snapshot.params['idAtendimento'];
  tecnicos$ = this.usuarioService.listarTecnicos();
  tecnicoForm!: FormGroup;

  ngOnInit(): void {
    this.formulario();
  }

  formulario() {
    this.atendimentoService
      .buscarID(this.codigo)
      .subscribe((dado: Atendimento) => {
        this.tecnicoForm = this.formBuilder.group({
          dataAgendamento: [dado.dataAgendamento],
          horaAgendamento: [dado.horaAgendamento],
          descricaoAtendimento: [dado.descricaoAtendimento],
          tipoAtendimento: [dado.tipoAtendimento],
          idTecnico: ['', [Validators.required]],
          idUsuario: [dado.idUsuario],
          cpfUsuario: [dado.cpf],
          nome: [dado.nome],
          statusAtendimento: ['ENCAMINHADO']
        });

        this.tecnicoForm.get('tipoAtendimento')?.disable();
        this.tecnicoForm.get('dataAgendamento')?.disable();
        this.tecnicoForm.get('horaAgendamento')?.disable();
        this.tecnicoForm.get('descricaoAtendimento')?.disable();
        this.tecnicoForm.get('cpfUsuario')?.disable();
        this.tecnicoForm.get('nome')?.disable();
      });
  }

  salvar() {
    if (this.tecnicoForm.valid) {
      const aten = this.tecnicoForm.getRawValue() as Atendimento;

      this.atendimentoService
        .atualizarTecnico(this.codigo, aten)
        .subscribe(() => {
          this.route.navigate(['', 'atendimento']);
          this.dialog.open(ModalMensagemComponent).componentInstance.msgModal =
            this.mensagem;
        });
    }
  }

  mensagem: Mensagem = {
    titulo: 'SOcial',
    texto:'Técnico Adicionado com sucesso',
  };
}
