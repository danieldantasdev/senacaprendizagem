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

  NovaEncontro(encontro: Encontro): Observable<Encontro> {
    return this.https.post<Encontro>(this.url, encontro, httpOptions);
  }

  AtualizarEncontro(
    encontroId: Encontro['encontroId'],
    encontro: Encontro
  ): Observable<Encontro> {
    const apiUrl = `${this.url}/${encontroId}`;
    return this.https.put<Encontro>(apiUrl, encontro, httpOptions);
  }

  ExcluirEncontro(encontroId: Encontro['encontroId']): Observable<Encontro> {
    const apiUrl = `${this.url}/${encontroId}`;
    return this.https.delete<Encontro>(apiUrl, httpOptions);
  }
}
