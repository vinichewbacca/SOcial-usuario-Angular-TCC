import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ExcluirAtendimentoComponent } from 'src/app/atendimento-usuario/excluir-atendimento/excluir-atendimento.component';
import { Atendimento } from 'src/app/atendimento/atendimento';
import { AtendimentoService } from 'src/app/atendimento/atendimento.service';
import { UsuarioService } from 'src/app/usuario/service/usuario.service';
import { switchMap } from 'rxjs';
import { Usuario } from 'src/app/usuario/usuario';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css'],
})
export class CartaoComponent implements OnInit {
  usuario$ = this.usuarioService.retornaUsuario();

  constructor(
    private route: Router,
    private dialog: MatDialog,
    private atendimentoService: AtendimentoService,
    private usuarioService: UsuarioService
  ) {}

  @Input() cartaoAtendimento!: Atendimento;
  ngOnInit(): void {}

  tecnico$ = this.usuarioService.retornaUsuario().pipe(
    switchMap((dado: Usuario) => {
      return this.usuarioService.buscaTecnicoId(dado.id as number);
    })
  );

  atualizarAtendimento(id: number) {
    this.route.navigate(['atendimento', 'atualizaAtendimento', id]);
  }

  excluirAtendimento(id: number) {
    this.atendimentoService.buscarID(id).subscribe((atendimento) => {
      this.cartaoAtendimento = atendimento;
    });

    this.dialog.open(
      ExcluirAtendimentoComponent
    ).componentInstance.agendamento = this.cartaoAtendimento;

    this.dialog.afterAllClosed.subscribe(() => {
      this.route.navigate(['atendimento']);
    });
  }

  encaminharTecnico(idAtendimento: number) {
    this.route.navigate([
      'atendimento',
      'encaminharAtendimento',
      idAtendimento,
    ]);
  }

  atender(idAtendimento: number) {
    this.route.navigate(['atendimento', 'atender', idAtendimento]);
  }
}
