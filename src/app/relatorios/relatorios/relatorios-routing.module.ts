import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelatorioGeralComponent } from '../relatorio-geral/relatorio-geral.component';
import { AuthGuard } from 'src/app/autenticacao/auth.guard';
import { RelatorioTipoComponent } from '../relatorio-tipo/relatorio-tipo.component';
import { RelatorioTecnicoComponent } from '../relatorio-tecnico/relatorio-tecnico.component';

const routes: Routes = [
  {
    path: 'relatorioGeral',
    component: RelatorioGeralComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'relatorioTipo',
    component: RelatorioTipoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'relatorioTecnico',
    component: RelatorioTecnicoComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelatoriosRoutingModule {}
