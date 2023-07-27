import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAtendimentoComponent } from './lista-atendimento/lista-atendimento.component';
import { NovoAtendimentoComponent } from './novo-atendimento/novo-atendimento.component';
import { AuthGuard } from '../autenticacao/auth.guard';
import { ExcluirAtendimentoComponent } from './excluir-atendimento/excluir-atendimento.component';
import { AtualizarAtendimentoComponent } from './atualizar-atendimento/atualizar-atendimento.component';
import { ListaTecnicoComponent } from '../atendimento-tecnico/lista-tecnico/lista-tecnico.component';
import { TecnicoGuard } from '../autenticacao/tecnico.guard';
import { EncaminhamentoTecnicoComponent } from '../atendimento-tecnico/encaminhamento-tecnico/encaminhamento-tecnico.component';
import { AtendimentoTecnicoComponent } from '../atendimento-tecnico/atendimento-tecnico/atendimento-tecnico.component';
import { HistoricoUsuarioComponent } from '../atendimento-tecnico/historico-usuario/historico-usuario.component';


const routes: Routes = [
  {
    path: '',
    component: ListaAtendimentoComponent,
    canActivate: [TecnicoGuard]
  },
  {
    path:'tecnico',
    component: ListaTecnicoComponent
  },
  {
    path: 'novoAtendimento/:idUsuario',
    component: NovoAtendimentoComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'excluirAtendimento',
    component: ExcluirAtendimentoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'atualizaAtendimento/:atmCdg',
    component: AtualizarAtendimentoComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'encaminharAtendimento/:idAtendimento',
    component: EncaminhamentoTecnicoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'atender/:idAtendimento',
    component: AtendimentoTecnicoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'historico/:idUsuario',
    component: HistoricoUsuarioComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtendimentoUsuarioRoutingModule {}
