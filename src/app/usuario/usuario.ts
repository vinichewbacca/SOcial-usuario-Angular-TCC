import { Endereco } from './endereco/endereco';

export interface Usuario {
  id?: number;
  nome?: string;
  dataNascimento?: string;
  rg?: string;
  cpf?: string;
  nis?: string;
  mae?: string;
  pai?: string;
  login?: string;
  senha?: string;
  endereco?: Endereco;
  perfil?: string;
  cargo?: string;
}

export type Usuarios = Array<Usuario>;
