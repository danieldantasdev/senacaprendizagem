import { PrimengModule } from './shared/primeng/primeng.module';
import { MaterialAngularModule } from './shared/material-angular/material-angular.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxMaskModule } from 'ngx-mask';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';

import { CursoTiposService } from '../app/services/curso-tipos.service';
import { CursosService } from '../app/services/cursos.service';
import { FuncoesService } from '../app/services/funcoes.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtualizarCursoComponent } from './components/Curso/atualizar-curso/atualizar-curso.component';
import {
  DialogExclusaoCursosComponent,
  ListagemCursosComponent,
} from './components/Curso/listagem-cursos/listagem-cursos.component';
import { NovoCursoComponent } from './components/Curso/novo-curso/novo-curso.component';
import { AdministradorDashboardComponent } from './components/Dashboard/administrador-dashboard/administrador-dashboard.component';
import { AdministradorListaCursosComponent } from './components/Dashboard/administrador-dashboard/administrador-lista-cursos/administrador-lista-cursos/administrador-lista-cursos.component';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './components/Dashboard/header/header.component';
import { UsuarioCalendarioAcademicoComponent } from './components/Dashboard/usuario-dashboard/usuario-calendario-academico/usuario-calendario-academico/usuario-calendario-academico.component';
import { UsuarioDashboardComponent } from './components/Dashboard/usuario-dashboard/usuario-dashboard.component';
import { UsuarioListaUcComponent } from './components/Dashboard/usuario-dashboard/usuario-lista-uc/usuario-lista-uc.component';
import { AtualizarFuncaoComponent } from './components/Funcao/atualizar-funcao/atualizar-funcao.component';
import {
  DialogExclusaoFuncoesComponente,
  ListagemFuncoesComponent,
} from './components/Funcao/listagem-funcoes/listagem-funcoes.component';
import { NovaFuncaoComponent } from './components/Funcao/nova-funcao/nova-funcao.component';
import { AtualizarOfertaComponent } from './components/Oferta/atualizar-oferta/atualizar-oferta.component';
import {
  DialogExclusaoOfertasComponent,
  ListagemOfertasComponent,
} from './components/Oferta/listagem-ofertas/listagem-ofertas.component';
import { NovaOfertaComponent } from './components/Oferta/nova-oferta/nova-oferta.component';
import { LoginUsuarioComponent } from './components/Usuario/Login/login-usuario/login-usuario.component';
import { RegistrarUsuarioComponent } from './components/Usuario/Registro/registrar-usuario/registrar-usuario.component';
import { AuthGuardService } from './services/auth-guard.service';
import { OfertasService } from './services/ofertas.service';
import { TimelineListaComponent } from './components/Timeline/timeline-lista/timeline-lista.component';
import { ErrorDialogComponent } from './shared/alerts/error-dialog/error-dialog.component';
import { IconPipe } from './shared/pipes/icon.pipe';
import { BackgroundIconPipe } from './shared/pipes/background-icon.pipe';
import { CheckClassPipe } from './shared/pipes/check-class.pipe';

//PrimeNG Imports

export function PegarTokenUsuario() {
  return localStorage.getItem('TokenUsuarioLogado');
}

@NgModule({
  declarations: [
    AppComponent,
    ListagemCursosComponent,
    NovoCursoComponent,
    AtualizarCursoComponent,
    DialogExclusaoCursosComponent,
    ListagemFuncoesComponent,
    NovaFuncaoComponent,
    AtualizarFuncaoComponent,
    DialogExclusaoFuncoesComponente,
    RegistrarUsuarioComponent,
    LoginUsuarioComponent,
    DashboardComponent,
    HeaderComponent,
    NovaOfertaComponent,
    ListagemOfertasComponent,
    AtualizarOfertaComponent,
    DialogExclusaoOfertasComponent,
    UsuarioDashboardComponent,
    AdministradorDashboardComponent,
    AdministradorListaCursosComponent,
    UsuarioListaUcComponent,
    UsuarioCalendarioAcademicoComponent,
    TimelineListaComponent,
    ErrorDialogComponent,
    IconPipe,
    BackgroundIconPipe,
    CheckClassPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    MatGridListModule,
    MatDialogModule,
    FormsModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: PegarTokenUsuario,
        allowedDomains: ['localhost:5099'],
        disallowedRoutes: [],
      },
    }),
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    TabViewModule,
    ButtonModule,
    ProgressBarModule,
    TableModule,
    ToastModule,
    CommonModule,
    MaterialAngularModule,
    PrimengModule,
  ],
  providers: [
    CursosService,
    CursoTiposService,
    FuncoesService,
    OfertasService,
    AuthGuardService,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
