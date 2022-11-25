import { Competencia } from './Competencia';
import { SituacaoAprendizagem } from './SituacaoAprendizagem';

export class IndicadorSituacaoAprendizagem {
  IndicadorSituacaoAprendizagemId: number;
  competenciaIndicadorId: number;
  competenciaIndicador: Competencia;
  situacaoAprendizagemId: number;
  situacaoAprendizagem: SituacaoAprendizagem;
}
