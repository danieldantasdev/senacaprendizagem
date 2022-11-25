import { Acompanhamento } from './Acompanhamento';
import { AcompanhamentoAtividadeComentario } from './AcompanhamentoAtividadeComentario';
import { BadgeNivel } from './BadgeNivel';
import { SituacaoAprendizagem } from './SituacaoAprendizagem';
import { SituacaoObjetoAprendizagem } from './SituacaoObjetoAprendizagem';

export class Badge {
  badgeId: number;
  badgeDescricao: string;
  badgeImg: Blob;
  badgeStatus: number;
  badgeNivelId: number;
  badgeNivel: BadgeNivel;
  acompanhamento: Acompanhamento;
  acompanhamentoAtividadeComentario: AcompanhamentoAtividadeComentario;
  situacaoAprendizagem: SituacaoAprendizagem;
  situacaoObjetoAprendizagem: SituacaoObjetoAprendizagem;
}
