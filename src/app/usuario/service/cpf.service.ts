import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CpfService {
  constructor(private service: UsuarioService) {}

  cpfCadastrado() {
    return (controle: AbstractControl) => {
      return controle.valueChanges.pipe(
        switchMap((cpf) => this.service.verificaCpfp(cpf)),
        map((cpfExiste) => (cpfExiste ? { cpfCadastrado: true } : null)),
        first()
      );
    };
  }
}
