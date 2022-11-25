import { Badge } from './Badge';

export class SituacaoAprendizagem {
  situacaoAprendizagemId: number;
  situacaoAprendizagemTitulo: string;
  situacaoAprendizagemDescricao: string;
  situacaoAprendizagemOrdem: number;
  situacaoAprendizagemStatus: number;
  planejamentoUcId: number;
  grauDificuldadeId: number;
  badgeId: number;
  badge: Badge;
}
