import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RelatorioGeralComponent } from '../relatorio-geral/relatorio-geral.component';
import { RelatorioTipoComponent } from '../relatorio-tipo/relatorio-tipo.component';
import { RelatorioTecnicoComponent } from '../relatorio-tecnico/relatorio-tecnico.component';

@NgModule({
  declarations: [
    RelatorioGeralComponent,
    RelatorioTipoComponent,
    RelatorioTecnicoComponent,
  ],
  imports: [
    CommonModule,
    RelatoriosRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class RelatoriosModule {}
