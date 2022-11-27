import { Encontro } from './../models/Encontro';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('TokeUsuarioLogado')}`,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class EncontroService {
  // url = environment.apiServer + 'api/Encontro';
  url = '/assets/db/timeline.json';
  constructor(private https: HttpClient) {}

  ObterEncontros(): Observable<Encontro[]> {
    const apiUrl = `${this.url}`;
    return this.https.get<Encontro[]>(apiUrl);
  }

  ObterEncontroPeloId(
    encontroId: Encontro['encontroId']
  ): Observable<Encontro> {
    const apiUrl = `${this.url}/${encontroId}`;
    return this.https.get<Encontro>(apiUrl);
  }

  ObterEncontroPeloCursoId(ofertaId: number): Observable<Encontro[]> {
    const apiUrl = `${this.url}/filterByOferta/${ofertaId}`;
    return this.https.get<Encontro[]>(apiUrl);
  }

  ObterEncontroPeloModuloId(moduloId: number): Observable<Encontro[]> {
    const apiUrl = `${this.url}/filterByModulo/${moduloId}`;
    return this.https.get<Encontro[]>(apiUrl);
  }

  ObterEncontroPeloUsuarioIdSemestreAtual(id: string): Observable<Encontro[]> {
    const apiUrl = `${this.url}/filterByUsuarioIdSemestreAtual/${id}`;
    return this.https.get<Encontro[]>(apiUrl);
  }

  ObterEncontroPeloUsuarioId(
    id: string,
    idPeriodo: number
  ): Observable<Encontro[]> {
    const apiUrl = `${this.url}/filterByUsuarioId/${id}/${idPeriodo}`;
    return this.https.get<Encontro[]>(apiUrl);
  }

  NovaEncontro(encontro: Encontro): Observable<Encontro> {
    return this.https.post<Encontro>(this.url, encontro, httpOptions);
  }

  AtualizarEncontro(
    encontroId: Encontro['encontroId'],
    uc: Encontro
  ): Observable<Encontro> {
    const apiUrl = `${this.url}/${encontroId}`;
    return this.https.put<Encontro>(apiUrl, uc, httpOptions);
  }

  ExcluirEncontro(encontroId: Encontro['encontroId']): Observable<Encontro> {
    const apiUrl = `${this.url}/${encontroId}`;
    return this.https.delete<Encontro>(apiUrl, httpOptions);
  }

  FiltrarEncontro(nomeUc: string, idOferta: number): Observable<Encontro[]> {
    const apiUrl = `${this.url}/FiltrarEncontro/${idOferta}/${nomeUc}`;
    return this.https.get<Encontro[]>(apiUrl);
  }
}
