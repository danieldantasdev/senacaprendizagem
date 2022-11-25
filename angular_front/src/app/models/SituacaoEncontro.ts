import { Encontro } from './Encontro';

export class SituacaoEncontro {
  situacaoEncontroId: number;
  situacaoEncontroStatus: number;
  situacaoAprendizagemId: number;
  situacaoAprendizagem: SituacaoEncontro;
  encontroId: number;
  encontro: Encontro;
}
