import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RelatorioService } from '../relatorios/relatorio.service';
import { Observable } from 'rxjs';
import { Relatorio } from '../relatorios/relatorio';
import { UsuarioService } from 'src/app/usuario/service/usuario.service';
import { Usuario } from 'src/app/usuario/usuario';

@Component({
  selector: 'app-relatorio-tecnico',
  templateUrl: './relatorio-tecnico.component.html',
  styleUrls: ['./relatorio-tecnico.component.css'],
})
export class RelatorioTecnicoComponent implements OnInit {
  constructor(
    private formbuilder: FormBuilder,
    private relatorioService: RelatorioService,
    private usuarioService: UsuarioService
  ) {}

  relatorioForm!: FormGroup;
  relatorio$!: Observable<Relatorio>;
  tecnico$!: Observable<Usuario>;
  tecnicos$ = this.usuarioService.listarTecnicos();
  cargo = '';
  ngOnInit(): void {
    this.relatorioForm = this.formbuilder.group({
      dataInicial: [''],
      dataFinal: [''],
      idTecnico: [0],
    });
    this.relatorioForm.get('dataInicial')?.disable();
    this.relatorioForm.get('dataFinal')?.disable();
  }

  buscarRelatorio() {
    const formmulario = this.relatorioForm.getRawValue() as Relatorio;
    this.tecnico$ = this.usuarioService.buscaTecnicoId(formmulario.idTecnico as number);
    this.relatorio$ = this.relatorioService.relatorioTecnico(formmulario);
  }
}
