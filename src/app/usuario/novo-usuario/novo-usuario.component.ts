import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../service/usuario.service';
import { CpfService } from '../service/cpf.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Validacoes } from '../validacoes';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  hide = true;
  usuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: UsuarioService,
    private cpfService: CpfService,
    private rota: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group(
      {
        nome: ['', [Validators.required, Validators.minLength(4)]],
        cpf: [
          '',
          [Validacoes.ValidaCpf, Validators.required],
          [this.cpfService.cpfCadastrado()],
        ],
        dataNascimento: ['', Validators.required],
        rg: [''],
        mae: [''],
        pai: [''],
        senha: ['', [Validators.required, Validators.minLength(7)]],
        senha1: [''],
      }
    );
  }

  cadastrar() {
    let id = 0;
    this.router.params.subscribe((paramentros) => {
      id = paramentros['id'];
    });

    if (this.usuarioForm.valid) {
      const novo = this.usuarioForm.getRawValue() as Usuario;

      this.service.salvarUsuario(novo, id).subscribe(() => {
        this.rota.navigate(['home']);
      });
    }
  }
}
