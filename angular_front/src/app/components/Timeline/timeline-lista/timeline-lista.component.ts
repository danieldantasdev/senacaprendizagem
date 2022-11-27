import { ErrorService } from 'src/app/shared/alerts/error-dialog/error-dialog.service';
import { EncontroService } from './../../../services/encontro.service';
import { Encontro } from './../../../models/Encontro';
import { catchError, delay, Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-timeline-lista',
  templateUrl: './timeline-lista.component.html',
  styleUrls: ['./timeline-lista.component.css'],
})
export class TimelineListaComponent implements OnInit {
  encontros$: Observable<Encontro[]>;

  constructor(
    private encontroService: EncontroService,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.encontros$ = this.encontroService.ObterEncontros().pipe(
      delay(500),
      catchError((error) => {
        this.errorService.onError('Erro ao carregar cursos.');
        return of([]);
      })
    );
  }
}
