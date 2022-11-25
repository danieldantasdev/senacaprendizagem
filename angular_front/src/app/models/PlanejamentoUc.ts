import { Grupo } from './Grupo';

export class PlanejamentoUc {
  planejamentoUcId: number;
  planejamentoUcDescricao: string;
  planejamentoUcDataAprovacao: string;
  planejamentoStatus: number;
  grupoId: number;
  grupo: Grupo;
}
