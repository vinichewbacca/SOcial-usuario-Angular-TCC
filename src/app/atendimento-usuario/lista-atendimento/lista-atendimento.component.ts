import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Atendimentos } from 'src/app/atendimento/atendimento';
import { AtendimentoService } from 'src/app/atendimento/atendimento.service';
import { UsuarioService } from 'src/app/usuario/service/usuario.service';

@Component({
  selector: 'app-lista-atendimento',
  templateUrl: './lista-atendimento.component.html',
  styleUrls: ['./lista-atendimento.component.css'],
})
export class ListaAtendimentoComponent implements OnInit {
  listaAtendimento!: Atendimentos;
  constructor(
    private usuarioService: UsuarioService,
    private atendimentoService: AtendimentoService
  ) {}

  ngOnInit(): void {
    this.lista();
  }

  lista() {
    this.usuarioService
      .retornaUsuario()
      .pipe(
        switchMap((dado: any) => {
          return this.atendimentoService.listarAtendimentos(dado.id);
        })
      )
      .subscribe((dado) => {
        this.listaAtendimento = dado;
      });
  }
}
