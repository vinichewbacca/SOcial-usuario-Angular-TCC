import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtendimentoUsuarioRoutingModule } from './atendimento-usuario-routing.module';
import { ListaAtendimentoComponent } from './lista-atendimento/lista-atendimento.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartaoModule } from '../componentes/cartao/cartao.module';
import { NovoAtendimentoComponent } from './novo-atendimento/novo-atendimento.component';
import { ExcluirAtendimentoComponent } from './excluir-atendimento/excluir-atendimento.component';
import { AtualizarAtendimentoComponent } from './atualizar-atendimento/atualizar-atendimento.component';
import { ListaTecnicoComponent } from '../atendimento-tecnico/lista-tecnico/lista-tecnico.component';
import { EncaminhamentoTecnicoComponent } from '../atendimento-tecnico/encaminhamento-tecnico/encaminhamento-tecnico.component';
import { AtendimentoTecnicoComponent } from '../atendimento-tecnico/atendimento-tecnico/atendimento-tecnico.component';
import { HistoricoUsuarioComponent } from '../atendimento-tecnico/historico-usuario/historico-usuario.component';

@NgModule({
  declarations: [
    ListaAtendimentoComponent,
    NovoAtendimentoComponent,
    ExcluirAtendimentoComponent,
    AtualizarAtendimentoComponent,
    ListaTecnicoComponent,
    EncaminhamentoTecnicoComponent,
    AtendimentoTecnicoComponent,
    HistoricoUsuarioComponent,
  ],
  imports: [
    CommonModule,
    AtendimentoUsuarioRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CartaoModule,
  ],
})
export class AtendimentoUsuarioModule {}
