import { UnidadeCurricular } from './UnidadeCurricular';
import { Periodo } from './Periodo';

export class Grupo {
  grupoId: number;
  grupoDescricao: string;
  grupoInicio: string;
  grupoFim: string;
  grupoSala: string;
  grupoStatus: number;
  turnoId: number;
  unidadeCurricularId: number;
  unidadeCurricular: UnidadeCurricular;
  periodoId: number;
  periodo: Periodo;
  professorId: number;
}
