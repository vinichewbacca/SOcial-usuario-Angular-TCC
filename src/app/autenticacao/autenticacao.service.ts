import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UsuarioService } from '../usuario/service/usuario.service';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  autenticar(usuario: string, password: string): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        `${API}/login`,
        {
          login: usuario,
          senha: password,
        },
        { observe: 'response' }
      )
      .pipe(
        tap({
          next: (dado: any) => this.usuarioService.salvaToken(dado.body.token),
        })
      );
  }
}
