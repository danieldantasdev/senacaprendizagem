import { EncontroStatus } from './../models/EncontroStatus';
import { Encontro } from './../models/Encontro';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, switchMap } from 'rxjs';
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
  url2 = '/assets/db/encontro.json';
  constructor(private https: HttpClient) {}

  ObterEncontros(): Observable<Encontro[]> {
    const apiUrl = `${this.url}`;
    return this.https.get<Encontro[]>(apiUrl);
  }

  ObterEncontroPeloId(encontroId: Encontro['id']): Observable<Encontro> {
    const apiUrl = `${this.url}/${encontroId}`;
    return this.https.get<Encontro>(apiUrl);
  }

  NovaEncontro(encontro: Encontro): Observable<Encontro> {
    return this.https.post<Encontro>(this.url, encontro, httpOptions);
  }

  AtualizarEncontro(
    encontroId: Encontro['id'],
    encontro: Encontro
  ): Observable<Encontro> {
    const apiUrl = `${this.url}/${encontroId}`;
    return this.https.put<Encontro>(apiUrl, encontro, httpOptions);
  }

  ExcluirEncontro(encontroId: Encontro['id']): Observable<Encontro> {
    const apiUrl = `${this.url}/${encontroId}`;
    return this.https.delete<Encontro>(apiUrl, httpOptions);
  }

  FiltarEncontroPelaData(
    dataEncontro: Encontro['horaFim']
  ): Observable<Encontro> {
    const apiUrl = `${this.url}/FiltrarEncontro/${dataEncontro}`;
    return this.https.get<Encontro>(apiUrl, httpOptions);
  }

  ObterStatusDoEncontro(
    idEncontro: EncontroStatus['id']
  ): Observable<EncontroStatus> {
    const apiUrl = `${this.url2}/ObterStatusEncontro/${idEncontro}`;
    return this.https.get<EncontroStatus>(apiUrl, httpOptions);
  }
}
