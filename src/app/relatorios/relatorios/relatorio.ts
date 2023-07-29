export interface Relatorio {
  dataInicial?: Date;
  dataFinal?: Date;

  totalAtendimento?: number;
  totalAtencimentoCancel?: number;
  servSocial?: number;
  bpcPcd?: number;
  bpcIdoso?: number;
  kitNatal?: number;
  kitEmerg?: number;
  intermIdoso?: number;
  intermPcd?: number;
  interesIdoso?: number;
  interesPcd?: number;
  atdPsico?: number;
  insercaoScfv?: number;

  cadUnico?: number;
  cadNovo?: number;
  cadAtualiza?: number;
  consultaSibec?: number;
  v7?: number;
  orientacoes?: number;
  outros?: number;
}
