import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {
  items: MenuItem[];
  nomeUsuarioLogado = localStorage.getItem("NomeUsuarioLogado");

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [{
      items: [{
        label: 'Perfil',
        icon: 'pi pi-user',
        routerLink: '/dashboard/usuariodashboard'
      },
      {
        label: 'Ofertas',
        icon: 'pi pi-th-large',
        routerLink: '/ofertas/listagemofertas'
      },
      {
        label: 'Comunidades',
        icon: 'pi pi-users',

      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => {
          this.EfetuarLogout();
        }
      }
      ]
    }
    ];
  }

  EfetuarLogout(): void {
    localStorage.clear();
    this.router.navigate(["usuarios/loginusuario"]);
  }
}
