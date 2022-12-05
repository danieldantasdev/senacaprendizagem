import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeIcons } from 'primeng/api';
import { catchError, delay, map, of, switchMap } from 'rxjs';
import { EncontroStatus } from 'src/app/models/EncontroStatus';
import { ErrorService } from 'src/app/shared/alerts/error-dialog/error-dialog.service';

import { Encontro } from './../../../models/Encontro';
import { EncontroService } from './../../../services/encontro.service';
import { StorageService } from './../../../shared/storage/storage.service';

@Component({
  selector: 'app-timeline-lista',
  templateUrl: './timeline-lista.component.html',
  styleUrls: ['./timeline-lista.component.css'],
})
export class TimelineListaComponent implements OnInit {
  // encontros$: Observable<Encontro[]>;
  encontros: Encontro[] = [];

  encontrosStatus: EncontroStatus[] = [];

  SituacaoAprendizagem: number = 1;
  ObjetoAprendizagem: number = 1;
  Atividade: number = 1;
  AtividadeVerificacao: number = 1;
  BadgesObtidos: number = 1;

  totalSituacaoAprendizagem: number = 1;
  totalObjetoAprendizagem: number = 1;
  totalAtividade: number = 1;
  totalAtividadeVerificacao: number = 1;
  totalBadgesObtidos: number = 1;
  statusCursada: number = 0;
  PrimeIcons: PrimeIcons;

  constructor(
    private encontroService: EncontroService,
    private errorService: ErrorService,
    private storageService: StorageService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ObterEncontros();
    this.ObterStatusDoEncontro();
  }

  // ObterEncontros$ = () => {
  //   this.encontros$ = this.encontroService.ObterEncontros().pipe(
  //     delay(500),
  //     catchError((error) => {
  //       this.errorService.onError('Erro ao carregar cursos.');
  //       return of([]);
  //     })
  //   );
  // };

  ObterEncontros = () => {
    this.encontroService
      .ObterEncontros()
      .pipe(
        delay(500),
        catchError((error) => {
          this.errorService.onError('Erro ao carregar cursos.');
          return of([]);
        })
      )
      .subscribe((encotros) => {
        this.encontros = encotros;

        let corrida: number = 0;

        for (const iterator of encotros) {
          this.encontroService
            .ObterStatusDoEncontro(iterator.id)
            .subscribe((encontro) => {
              if (iterator.id === encontro.id) {
                this.encontrosStatus.push(encontro);
                corrida++;

                if (corrida === this.encontros.length) {
                  this.encontrosStatus.sort((a, b) => {
                    return a.id < b.id ? 1 : -1;
                  });
                }
              }
            });
        }
      });
  };

  ObterStatusDoEncontro = () => {};

  // ObterEncontrosId = () => {
  //   this.encontroService.ObterEncontros().subscribe((data) => {
  //     this.encontros = data;
  //     // First get the product id from the current route.
  //     const routeParams = this._route.snapshot.paramMap;
  //     const unidadeCuricularIdFromRoute = Number(routeParams.get('id'));

  //     // Find the product that correspond with the id provided in route.
  //     this.encontro = this.encontros.find(
  //       (data) => data.id === unidadeCuricularIdFromRoute
  //     );
  //   });
  // };
}
