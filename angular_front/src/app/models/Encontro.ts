import { DiaLetivo } from './DiaLetivo';
import { EncontroTipo } from './EncontroTipo';
import { Grupo } from './Grupo';

export class Encontro {
  id: number;
  descricao: string;
  horaInicio: Date;
  horaFim: Date;
  local: string;
  status: number;
  diaLetivoId: number;
  diaLetivo: DiaLetivo;
  grupoId: Grupo['grupoId'];
  grupo: Grupo;
  encontroTipoId: EncontroTipo['encontroTipoId'];
  encontroTipo: EncontroTipo;
}
