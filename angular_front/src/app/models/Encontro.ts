import { Competencia } from './Competencia';
import { CompetenciaIndicador } from './CompetenciaIndicador';
import { DiaLetivo } from './DiaLetivo';
import { EncontroTipo } from './EncontroTipo';
import { Grupo } from './Grupo';
import { IndicadorSituacaoAprendizagem } from './IndicadorSituacaoAprendizagem';
import { ObjetoAprendizagem } from './ObjetoAprendizagem';
import { Periodo } from './Periodo';
import { PlanejamentoUc } from './PlanejamentoUc';
import { SituacaoAprendizagem } from './SituacaoAprendizagem';
import { SituacaoEncontro } from './SituacaoEncontro';
import { SituacaoObjetoAprendizagem } from './SituacaoObjetoAprendizagem';
import { UnidadeCurricular } from './UnidadeCurricular';

export class Encontro {
  encontroId: number;
  encontroObservacao: string;
  diaLetivoId: number;
  diaLetivo: DiaLetivo;
  grupoId: number;
  grupo: Grupo;
  encontroHoraInicio: string;
  encontroHoraFim: string;
  encontroLocal: string;
  encontroStatus: number;
  encontroTipoId: number;
  encontroTipo: EncontroTipo;
}
