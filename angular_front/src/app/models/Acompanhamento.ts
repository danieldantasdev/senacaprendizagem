import { SituacaoAprendizagem } from './SituacaoAprendizagem';
import { Badge } from './Badge';

export class Acompanhamento {
  acompanhamentoId: number;
  acompanhamentoInicio: string;
  acompanhamentoFinalizacao: string;
  acompanhamentoStatus: number;
  participanteId: number;
  avaliacaoConceitoId: number;
  atividadeId: number;
  objetoAprendizagemId: number;
  situacaoAprendizagemId: number;
  situacaoAprendizagem: SituacaoAprendizagem;
  badgeId: number;
  badge: Badge;
  acompanhamentoDataBadge: string;
}
