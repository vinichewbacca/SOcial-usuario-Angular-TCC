import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ModalMensagemComponent } from './componentes/modal-mensagem/modal-mensagem.component';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { ConstrucaoComponent } from './componentes/construcao/construcao.component';

registerLocaleData(localePT);

@NgModule({
  declarations: [AppComponent, ModalMensagemComponent, ConstrucaoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    CabecalhoModule,
    AutenticacaoModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-br' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
