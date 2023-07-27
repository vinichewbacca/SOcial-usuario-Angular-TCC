import { Endereco } from './../endereco';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnderecoService } from '../endereco.service';
import { MatDialog } from '@angular/material/dialog';
import { Mensagem } from 'src/app/componentes/modal-mensagem/mensagem';
import { ModalMensagemComponent } from '../../../componentes/modal-mensagem/modal-mensagem.component';

@Component({
  selector: 'app-atualizar-endereco',
  templateUrl: './atualizar-endereco.component.html',
  styleUrls: ['./atualizar-endereco.component.css'],
})
export class AtualizarEnderecoComponent implements OnInit {
  enderecoForm!: FormGroup;
  idEndereco: number = this.activatedRoute.snapshot.params['idEnd'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private enderecoService: EnderecoService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formulario();
  }

  buscaCep() {
    const end = this.enderecoForm.getRawValue() as Endereco;
    const cep = end.cep;

    this.enderecoService.buscaCep(`${cep}`).subscribe((dado:any)=>{
      this.enderecoForm.patchValue({
        cep: dado.cep,
          logradouro: dado.logradouro,
          bairro: dado.bairro,
          cidade: dado.localidade,
          uf: dado.uf,
      })
    })
  }

  formulario() {
    this.enderecoService
      .buscaEnderecoId(this.idEndereco)
      .subscribe((dados: Endereco) => {
        this.enderecoForm = this.formBuilder.group({
          cep: [dados.cep, [Validators.required]],
          logradouro: [dados.logradouro, [Validators.required]],
          numero: [dados.numero, [Validators.required]],
          complemento: [dados.complemento],
          bairro: [dados.bairro],
          cidade: [dados.cidade],
          uf: [dados.uf],
        });
      });
  }

  atualizarEndereco() {
    const end = this.enderecoForm.getRawValue() as Endereco;
    if (this.enderecoForm.valid) {
      this.enderecoService.atualizarEndereco(this.idEndereco, end).subscribe(
        () => {
          this.dialog.open(ModalMensagemComponent).componentInstance.msgModal =
            this.mensagem;
          this.router.navigate(['', 'atendimento']);
        },
        (errors) => {
          this.dialog.open(ModalMensagemComponent).componentInstance.msgModal =
            this.mensagem2;
        }
      );
    } else {
      this.dialog.open(ModalMensagemComponent).componentInstance.msgModal =
        this.mensagem2;
    }
  }

  mensagem: Mensagem = {
    titulo: 'SOcial',
    texto: 'Endereço Atualizado com Sucesso',
  };
  mensagem2: Mensagem = {
    titulo: 'SOcial',
    texto: 'Ocorreu algum erro, volte a pagina inicial e tente novamente.',
  };
}
