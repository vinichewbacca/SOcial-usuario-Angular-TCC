export interface Atendimento {
  id?: number;
  dataAgendamento?: Date;
  dataNascimento?: Date;
  horaAgendamento?: string;
  descricaoAtendimento?: string;
  relatorio?: string;
  statusAtendimento?: string;
  tipoAtendimento?: string;
  idUsuario?: number;
  idTecnico?: number;
  nome?: string;
  cpf?: string;
  nomeTecnico?: string;
}

export type Atendimentos = Array<Atendimento>;
