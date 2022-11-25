import { SituacaoAprendizagem } from './SituacaoAprendizagem';
import { ObjetoAprendizagem } from './ObjetoAprendizagem';

export interface SituacaoObjetoAprendizagem {
  situacaoObjetoAprendizagemId: number;
  situacaoObjetoAprendizagemOrdem: number;
  situacaoAprendizagemId: number;
  situacaoAprendizagem: SituacaoAprendizagem;
  objetoAprendizagemId: number;
  objetoAprendizagem: ObjetoAprendizagem;
}
