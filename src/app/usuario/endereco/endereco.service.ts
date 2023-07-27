import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endereco } from './endereco';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class EnderecoService {
  constructor(private http: HttpClient) {}

  buscaCep(cep: string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }

  salvarEndereco(endereco: Endereco) {
    return this.http.post<Endereco>(`${API}/endereco`, endereco);
  }

  atualizarEndereco(idEndereco: number, endereco: Endereco) {
    return this.http.put<Endereco>(
      `${API}/endereco/id=${idEndereco}`,
      endereco
    );
  }

  buscaEnderecoId(idEndereco: number): Observable<Endereco> {
    return this.http.get<Endereco>(`${API}/endereco/${idEndereco}`);
  }
}
