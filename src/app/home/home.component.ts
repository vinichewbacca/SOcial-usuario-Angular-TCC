import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalMensagemComponent } from '../componentes/modal-mensagem/modal-mensagem.component';
import { Mensagem } from '../componentes/modal-mensagem/mensagem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  hide = true;
  login = '';
  senha = '';
  constructor(
    private authService: AutenticacaoService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  mensagem: Mensagem = {
    titulo: 'SOcial',
    texto:
      'Senha ou Login Inválido. Verifique se o capslock está ativado ou se cadastre caso não seja',
  };

  ngOnInit(): void {}
  login1() {
    this.authService.autenticar(this.login, this.senha).subscribe(
      () => {
        this.router.navigate(['atendimento']);
      },
      (error) => {
        this.dialog.open(ModalMensagemComponent).componentInstance.msgModal =
          this.mensagem;
      }
    );
  }
}
