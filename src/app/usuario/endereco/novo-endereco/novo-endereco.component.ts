import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Mensagem } from '../../../componentes/modal-mensagem/mensagem';
import { Endereco } from '../endereco';
import { EnderecoService } from '../endereco.service';
import { ModalMensagemComponent } from 'src/app/componentes/modal-mensagem/modal-mensagem.component';

@Component({
  selector: 'app-novo-endereco',
  templateUrl: './novo-endereco.component.html',
  styleUrls: ['./novo-endereco.component.css'],
})
export class NovoEnderecoComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private enderecoService: EnderecoService
  ) {}

  mensagem: Mensagem = {
    titulo: 'CEP Invalido',
    texto: 'Digite o Endereço manualmente',
  };

  enderecoForm = this.formBuilder.group({
    cep: ['', [Validators.required]],
    logradouro: [''],
    bairro: [''],
    numero: [''],
    complemento: [''],
    cidade: [''],
    uf: [''],
  });

  ngOnInit(): void {
    this.enderecoForm.get('numero')?.disable();
    this.enderecoForm.get('complemento')?.disable();
    this.desabilitaCampos();
  }

  desabilitaCampos() {
    this.enderecoForm.get('bairro')?.disable();
    this.enderecoForm.get('logradouro')?.disable();
    this.enderecoForm.get('cidade')?.disable();
    this.enderecoForm.get('uf')?.disable();
  }

  buscaCep() {
    const end = this.enderecoForm.getRawValue() as Endereco;
    const cep = end.cep;

    this.enderecoService.buscaCep(`${cep}`).subscribe((dado: any) => {
      if (!dado.erro == true) {
        this.enderecoForm.patchValue({
          cep: dado.cep,
          logradouro: dado.logradouro,
          bairro: dado.bairro,
          cidade: dado.localidade,
          uf: dado.uf,
        });
        this.desabilitaCampos();
        this.enderecoForm.get('numero')?.enable();
        this.enderecoForm.get('complemento')?.enable();
      } else {
        this.dialog.open(ModalMensagemComponent).componentInstance.msgModal =
          this.mensagem;
        this.enderecoForm.get('bairro')?.enable();
        this.enderecoForm.get('logradouro')?.enable();
        this.enderecoForm.get('cidade')?.enable();
        this.enderecoForm.get('uf')?.enable();
        this.enderecoForm.get('numero')?.enable();
        this.enderecoForm.get('complemento')?.enable();
      }
    });
  }

  salvarEndereco() {
    if (this.enderecoForm.valid) {
      const novoEndereco = this.enderecoForm.getRawValue() as Endereco;

      this.enderecoService
        .salvarEndereco(novoEndereco)
        .subscribe((dado: Endereco) => {
          console.log(dado.id);
          this.router.navigate(['novoUsuario/'+dado.id]);
        });
    }
  }
}
