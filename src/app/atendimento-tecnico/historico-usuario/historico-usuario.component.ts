import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AtendimentoService } from 'src/app/atendimento/atendimento.service';

@Component({
  selector: 'app-historico-usuario',
  templateUrl: './historico-usuario.component.html',
  styleUrls: ['./historico-usuario.component.css'],
})
export class HistoricoUsuarioComponent implements OnInit {
  constructor(
    private atendimentoService: AtendimentoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  idUsuario = this.activatedRoute.snapshot.params['idUsuario'];
  historico$ = this.atendimentoService.historicoAtendimento(this.idUsuario);
}
