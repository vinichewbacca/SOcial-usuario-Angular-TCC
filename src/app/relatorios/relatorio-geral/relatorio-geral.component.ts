import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Relatorio } from '../relatorios/relatorio';
import { RelatorioService } from '../relatorios/relatorio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-relatorio-geral',
  templateUrl: './relatorio-geral.component.html',
  styleUrls: ['./relatorio-geral.component.css'],
})
export class RelatorioGeralComponent implements OnInit {
  constructor(
    private formbuilder: FormBuilder,
    private relatorioService: RelatorioService
  ) {}

  relatorioForm!: FormGroup;
  relatorio$!: Observable<Relatorio>;
  ngOnInit(): void {
    this.relatorioForm = this.formbuilder.group({
      dataInicial: [''],
      dataFinal: [''],
    });
    this.relatorioForm.get('dataInicial')?.disable();
    this.relatorioForm.get('dataFinal')?.disable();
  }

  buscarRelatorio() {

    const novo = this.relatorioForm.getRawValue() as Relatorio;
    this.relatorio$ = this.relatorioService.relatorioGeral(novo);
  }
}
