import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atendimento, Atendimentos } from './atendimento';
import { TokenService } from '../token/token.service';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class AtendimentoService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  //lista atendimento por id
  buscarID(id: number): Observable<Atendimento> {
    return this.http.get<Atendimento>(`${API}/atendimento/${id}`);
  }

  /*----Técnico----*/
  //Atender um agendamento ou adicionar um técnico para o agendamento
  atualizarTecnico(idAtendimento: number, atendimento: Atendimento) {
    return this.http.put<Atendimento>(
      `${API}/atendimento/tecnico/idAtendimento=${idAtendimento}`,
      atendimento
    );
  }

  //lista os atendimentos da data atual
  listaAtendimentoDataAtual(): Observable<Atendimentos> {
    return this.http.get<Atendimentos>(`${API}/atendimento/tecnico/data`);
  }

  //lista os atendimentos da data atual por tipo
  listaAtendAtualTipo(tipoAtendimento: string): Observable<Atendimentos> {
    return this.http.get<Atendimentos>(
      `${API}/atendimento/tecnico/tipoAtendimento=${tipoAtendimento}`
    );
  }

  //lista todos os agendamentos
  listaTudo(): Observable<Atendimentos> {
    return this.http.get<Atendimentos>(`${API}/atendimento/tecnico`);
  }

  //lista todos os agendamentos encaminhados para tecnico
  listaAtendimentoEncaminhado(): Observable<Atendimentos> {
    return this.http.get<Atendimentos>(`${API}/atendimento/tecnico2`);
  }

  //Cancela um atendimento
  cancelaAgendamento(
    id: number,
    atendimento: Atendimento,
    idTecnico: number
  ): Observable<Atendimento> {
    return this.http.put<Atendimento>(
      `${API}/atendimento/tecnico/cancelar=${id}&id=${idTecnico}`,
      atendimento
    );
  }

  //Historico de atendimento do usuario
  historicoAtendimento(idUsuario: number): Observable<Atendimentos> {
    return this.http.get<Atendimentos>(
      `${API}/atendimento/tecnico/historicoUsuario=${idUsuario}`
    );
  }

  /*----Usuário----*/
  //lista todos atendimentos
  listarAtendimentos(id: number): Observable<Atendimentos> {
    return this.http.get<Atendimentos>(`${API}/atendimento/usuario/${id}`);
  }

  //lista todos os atendimentos por tipo
  listarAtendimentosTipo(tipo: string, id: number): Observable<Atendimentos> {
    return this.http.get<Atendimentos>(
      `${API}/atendimento/usuario/atendimento=${tipo}/${id}`
    );
  }

  //Salva um agendamento
  salvarAgendamento(agendamento: Atendimento) {
    return this.http.post<Atendimento>(
      `${API}/atendimento/usuario`,
      agendamento
    );
  }

  //Exclui um atendimento agendado
  excluirAgendamento(
    idAtendimento: number,
    atendimento: Atendimento,
    idUsuario: number
  ): Observable<Atendimento> {
    return this.http.put<Atendimento>(
      `${API}/atendimento/usuario/cancela/id=${idAtendimento}&idUsuario=${idUsuario}`,
      atendimento
    );
  }

  //Atualizar um atendimento agendado
  atualizarUsuario(idAtendimento: number, antedimento: Atendimento) {
    return this.http.put<Atendimento>(
      `${API}/atendimento/usuario/id=${idAtendimento}`,
      antedimento
    );
  }
}
