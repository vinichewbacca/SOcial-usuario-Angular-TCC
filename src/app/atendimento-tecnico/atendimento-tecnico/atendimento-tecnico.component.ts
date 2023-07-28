import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Atendimento } from 'src/app/atendimento/atendimento';
import { AtendimentoService } from 'src/app/atendimento/atendimento.service';
import { UsuarioService } from 'src/app/usuario/service/usuario.service';

@Component({
  selector: 'app-atendimento-tecnico',
  templateUrl: './atendimento-tecnico.component.html',
  styleUrls: ['./atendimento-tecnico.component.css'],
})
export class AtendimentoTecnicoComponent implements OnInit {
  constructor(
    private usuarioService: UsuarioService,
    private formbuilder: FormBuilder,
    private atendimentoService: AtendimentoService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private dialog: MatDialog
  ) {}

  idAtendimento: number = this.activatedRoute.snapshot.params['idAtendimento'];
  atendimento$ = this.atendimentoService.buscarID(this.idAtendimento);
  tecnico$ = this.usuarioService.retornaUsuario();
  tecnicoForm!: FormGroup;
  data = new Date();
  ngOnInit(): void {
    this.formulario();
  }

  formulario() {
    this.atendimentoService
      .buscarID(this.idAtendimento)
      .subscribe((dado: Atendimento) => {
        this.tecnicoForm = this.formbuilder.group({
          nome: [dado.nome],
          cpfUsuario: [dado.cpf],
          dataAgendamento: [dado.dataAgendamento],
          horaAgendamento: [dado.horaAgendamento],
          tipoAtendimento: [dado.tipoAtendimento],
          descricaoAtendimento: ['', [Validators.required]],
          relatorio: ['', [Validators.required]],
          statusAtendimento: ['ATENDIDO'],
          idTecnico: [0]
        });
        this.tecnicoForm.get('tipoAtendimento')?.disable();
        this.tecnicoForm.get('dataAgendamento')?.disable();
        this.tecnicoForm.get('horaAgendamento')?.disable();
        this.tecnicoForm.get('cpfUsuario')?.disable();
        this.tecnicoForm.get('nome')?.disable();
      });
  }

  salvar(idTecnico: number) {
    if (this.tecnicoForm.valid) {
      this.tecnicoForm.get('idTecnico')?.setValue(idTecnico)
      const aten = this.tecnicoForm.getRawValue() as Atendimento;

      this.atendimentoService
        .atualizarTecnico(this.idAtendimento, aten)
        .subscribe(() => {
          this.route.navigate(['', 'atendimento']);
        });
    }
  }

  cadunico: string[] = [
    'Atualização de Cadastro',
    'Cadastro Novo',
    'Consulta SIBEC',
    'Emissão v7',
    'Orientações',
    'Outros',
  ];

  servsocial: string[] = [
    'Solicitação Auxilio Natalidade',
    'Solicitação Auxilio Emergencial',
    'BPC/Idoso',
    'BPC/PCD',
    'Passe Intermunicipal/Idoso',
    'Passe Intermunicipal/PCD',
    'Passe Interestadual/Idoso',
    'Passe Interestadual/PCD',
    'Atendimento Psicossocial',
    'Inserção em SCFV',
    'Orientações',
    'Outros',
  ];
}
