import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelatorioGeralComponent } from '../relatorio-geral/relatorio-geral.component';
import { AuthGuard } from 'src/app/autenticacao/auth.guard';

const routes: Routes = [
  {
    path: 'relatorioGeral',
    component: RelatorioGeralComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule { }
