import { BuscaUsuarioComponent } from './../usuario/busca-usuario/busca-usuario.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NovoUsuarioComponent } from '../usuario/novo-usuario/novo-usuario.component';
import { NovoEnderecoComponent } from '../usuario/endereco/novo-endereco/novo-endereco.component';
import { PerfilUsuarioComponent } from '../usuario/perfil-usuario/perfil-usuario.component';
import { AuthGuard } from '../autenticacao/auth.guard';
import { AtualizarUsuarioComponent } from '../usuario/atualizar-usuario/atualizar-usuario.component';
import { AtualizarEnderecoComponent } from '../usuario/endereco/atualizar-endereco/atualizar-endereco.component';
import { ConstrucaoComponent } from '../componentes/construcao/construcao.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'construcao',
    component: ConstrucaoComponent
  },
  {
    path:'buscaUsuario',
    component: BuscaUsuarioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'novoEndereco',
    component: NovoEnderecoComponent,
  },
  {
    path: 'novoUsuario/:id',
    component: NovoUsuarioComponent,
  },
  {
    path: ':usuarioId',
    component: PerfilUsuarioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'atualizarUsuario/:idUser',
    component: AtualizarUsuarioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'atualilzarEndereco/:idEnd',
    component: AtualizarEnderecoComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
