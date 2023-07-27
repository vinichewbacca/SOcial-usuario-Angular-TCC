import { Validacoes } from './../validacoes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario';
import { CpfService } from '../service/cpf.service';
import { MatDialog } from '@angular/material/dialog';
import { Mensagem } from 'src/app/componentes/modal-mensagem/mensagem';
import { ModalMensagemComponent } from 'src/app/componentes/modal-mensagem/modal-mensagem.component';

@Component({
  selector: 'app-atualizar-usuario',
  templateUrl: './atualizar-usuario.component.html',
  styleUrls: ['./atualizar-usuario.component.css'],
})
export class AtualizarUsuarioComponent implements OnInit {
  hide = true;
  usuarioForm!: FormGroup;
  idUsuario: number = this.activatetdRoute.snapshot.params['idUser'];

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private route: Router,
    private activatetdRoute: ActivatedRoute,
    private cpfService: CpfService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.formulario();
  }

  formulario() {
    this.usuarioService
      .buscaUsuarioId(this.idUsuario)
      .subscribe((dados: Usuario) => {
        this.usuarioForm = this.formBuilder.group({
          nome: [dados.nome, [Validators.required]],
          dataNascimento: [dados.dataNascimento, [Validators.required]],
          cpf: [dados.cpf, [Validacoes.ValidaCpf, Validators.required]],
          rg: [dados.rg],
          nis: [dados.nis],
          mae: [dados.mae],
          pai: [dados.pai],
        });
      });
  }

  atualizarUsuario() {
    const user = this.usuarioForm.getRawValue() as Usuario;
    this.usuarioService.atualizarUsuario(this.idUsuario, user).subscribe(
      () => {
        this.dialog.open(ModalMensagemComponent).componentInstance.msgModal =
          this.mensagem1;
        this.route.navigate(['', 'atendimento']);
      },
      (error) => {
        this.dialog.open(ModalMensagemComponent).componentInstance.msgModal =
        this.mensagem2;
      }
    );
  }

  mensagem1: Mensagem = {
    titulo: 'SOcial',
    texto: 'Atualizado com Sucesso',
  };

  mensagem2: Mensagem = {
    titulo: 'SOcial',
    texto: 'Ocorreu algum erro, volte a pagina inicial e tente novamente.',
  };
}
