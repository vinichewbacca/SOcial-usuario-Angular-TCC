import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';
import { LoginGuard } from './autenticacao/login.guard';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'home'
  },
  {
    path:'home',
    loadChildren:()=> import('./home/home.module').then((m)=>m.HomeModule),
    canLoad:[LoginGuard]
  },
  {
    path:'atendimento',
    loadChildren:()=> import('./atendimento-usuario/atendimento-usuario.module').then((m)=>m.AtendimentoUsuarioModule),
    canLoad:[AutenticacaoGuard]
  },
  {
    path:'relatorios',
    loadChildren:()=> import('./relatorios/relatorios/relatorios.module').then((m)=>m.RelatoriosModule),
    canLoad:[AutenticacaoGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
