import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Relatorio } from './relatorio';
import { Observable } from 'rxjs';

const API = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class RelatorioService {
  constructor(private http: HttpClient) {}

  /*--Cria o Relatorio Geral de tudo--*/
  relatorioGeral(formulario: Relatorio): Observable<Relatorio> {
    let di = this.convertData(formulario.dataInicial);
    let df = this.convertData(formulario.dataFinal);
    return this.http.get<Relatorio>(`${API}/relatorios/1a/di${di}$df${df}`);
  }

  /*--Cria o Relatório por Técnico--*/
  relatorioTecnico(formulario: Relatorio): Observable<Relatorio>{
    let di = this.convertData(formulario.dataInicial)
    let df = this.convertData(formulario.dataFinal)
    return this.http.get<Relatorio>(`${API}/relatorios/2a/di${di}$df${df}/tecnico${formulario.idTecnico}`)
  }
  /*função para converter data*/
  convertData(data: any): string {
    function pad(number: number) {
      if (number < 10) {
        return '0' + number;
      }
      return number;
    }
    return (
      data.getUTCFullYear() +
      '-' +
      pad(data.getUTCMonth() + 1) +
      '-' +
      pad(data.getUTCDate())
    );
  }
}
