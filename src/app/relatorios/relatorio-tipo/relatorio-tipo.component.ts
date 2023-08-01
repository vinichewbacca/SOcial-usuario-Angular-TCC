import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Relatorio } from '../relatorios/relatorio';
import { RelatorioService } from '../relatorios/relatorio.service';

@Component({
  selector: 'app-relatorio-tipo',
  templateUrl: './relatorio-tipo.component.html',
  styleUrls: ['./relatorio-tipo.component.css'],
})
export class RelatorioTipoComponent implements OnInit {
  constructor(
    private formbuilder: FormBuilder,
    private relatorioService: RelatorioService
  ) {}

  relatorioForm!: FormGroup;
  relatorio$!: Observable<Relatorio>;
  tipoAtendimento = '';
  ngOnInit(): void {
    this.relatorioForm = this.formbuilder.group({
      dataInicial: [''],
      dataFinal: [''],
    });
    this.relatorioForm.get('dataInicial')?.disable();
    this.relatorioForm.get('dataFinal')?.disable();
  }

  buscarRelatorio(atendimento: string) {
    this.tipoAtendimento = atendimento;
    const formulario = this.relatorioForm.getRawValue() as Relatorio;
    this.relatorio$ = this.relatorioService.relatorioGeral(formulario);
  }
}
