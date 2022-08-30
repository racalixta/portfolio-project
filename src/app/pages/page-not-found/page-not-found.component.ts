import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/core/models/menu-item.model';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      name: 'Página Inicial',
      toolTipText: 'Página Inicial',
      routerLink: '/home'
    },
    {
      name: 'Projetos',
      toolTipText: 'Projetos',
      routerLink: '/projects'
    },
  ];

  page: string = "not-found";

  constructor() { }

  ngOnInit(): void {
  }

}
