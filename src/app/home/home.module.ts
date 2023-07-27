import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { NovoUsuarioComponent } from '../usuario/novo-usuario/novo-usuario.component';
import { NovoEnderecoComponent } from '../usuario/endereco/novo-endereco/novo-endereco.component';
import { PerfilUsuarioComponent } from '../usuario/perfil-usuario/perfil-usuario.component';
import { AtualizarUsuarioComponent } from '../usuario/atualizar-usuario/atualizar-usuario.component';
import { AtualizarEnderecoComponent } from '../usuario/endereco/atualizar-endereco/atualizar-endereco.component';
import { BuscaUsuarioComponent } from '../usuario/busca-usuario/busca-usuario.component';

@NgModule({
  declarations: [
    HomeComponent,
    NovoUsuarioComponent,
    NovoEnderecoComponent,
    PerfilUsuarioComponent,
    AtualizarUsuarioComponent,
    AtualizarEnderecoComponent,
    BuscaUsuarioComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
