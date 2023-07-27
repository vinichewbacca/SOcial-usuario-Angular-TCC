import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuarios } from '../usuario';
import { Observable } from 'rxjs';
import { AtendimentoService } from 'src/app/atendimento/atendimento.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Mensagem } from 'src/app/componentes/modal-mensagem/mensagem';
import { ModalMensagemComponent } from 'src/app/componentes/modal-mensagem/modal-mensagem.component';

@Component({
  selector: 'app-busca-usuario',
  templateUrl: './busca-usuario.component.html',
  styleUrls: ['./busca-usuario.component.css'],
})
export class BuscaUsuarioComponent implements OnInit {
  constructor(
    private usuarioService: UsuarioService,
    private atendimentoSevice: AtendimentoService,
    private route: Router,
    private dialog: MatDialog
  ) {}

  usuario$!: Observable<Usuarios>;
  colunas: string[] = [
    'nome',
    'cpf',
    'dataNascimento',
    'historico',
    'editar',
    'agendar',
  ];

  ngOnInit(): void {}

  buscar(nome: Event) {
    const n = (nome.target as HTMLInputElement).value;
    this.usuario$ = this.usuarioService.buscaUsuarioNome(n);
  }

  historicoAtendimento(idUsuario: number) {
    this.atendimentoSevice
      .historicoAtendimento(idUsuario)
      .subscribe((dado: any) => {
        if (!dado) {
          this.dialog.open(ModalMensagemComponent).componentInstance.msgModal =
            this.mensagem;
        } else {
          this.route.navigate(['', 'atendimento', 'historico', idUsuario]);
        }
      });
  }

  mensagem: Mensagem = {
    titulo: 'SOcial',
    texto: 'O Usuário não possui nenhuma atendimento',
  };
}
