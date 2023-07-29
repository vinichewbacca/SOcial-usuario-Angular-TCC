import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Usuario, Usuarios } from '../usuario';
import { TokenService } from 'src/app/token/token.service';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private http: HttpClient, private tokenService: TokenService) {
    if (this.tokenService.possuirToken()) {
      this.decodificaJWT();
    }
  }

  /*---Relacionado ao Usuario---*/
  verificaCpfp(cpf: string) {
    return this.http.get(`${API}/usuario/cpf=${cpf}`);
  }

  salvarUsuario(usuario: Usuario, enderecoId: number) {
    return this.http.post<Usuario>(`${API}/usuario/${enderecoId}`, usuario);
  }

  buscaUsuarioId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${API}/usuario/id=${id}`);
  }

  atualizarUsuario(idUsuario: number, usuario: Usuario) {
    return this.http.put<Usuario>(`${API}/usuario/id=${idUsuario}`, usuario);
  }

  buscaUsuarioNome(nome: string): Observable<Usuarios> {
    return this.http.get<Usuarios>(`${API}/usuario/nome=${nome}`);
  }

  /*---Relacionado ao Tecnico---*/
  listarTecnicos(): Observable<Usuarios> {
    return this.http.get<Usuarios>(`${API}/tecnico`);
  }

  buscaTecnicoId(idTecnico: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${API}/tecnico/busca=${idTecnico}`);
  }

  /*---Autenticar Usuario com Token---*/
  private decodificaJWT() {
    const token = this.tokenService.retornaToken();
    const usuario = jwtDecode(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }

  retornaUsuario() {
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token: string) {
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  logout() {
    this.tokenService.excluirToken();
    this.usuarioSubject.next({});
  }

  logado() {
    return this.tokenService.possuirToken();
  }
}
