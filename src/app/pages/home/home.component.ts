import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/core/models/menu-item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // routerLink: '/home#info'
  menuItems: MenuItem[] = [
    {
      name: 'Página Inicial',
      toolTipText: 'Página Inicial',
      routerLink: 'info'
    },
    {
      name: 'Sobre',
      toolTipText: 'Sobre',
      routerLink: 'about-me'
    },
    {
      name: 'Habilidades',
      toolTipText: 'Habilidades',
      routerLink: 'skills'
    },
    {
      name: 'Projetos',
      toolTipText: 'Projetos',
      routerLink: 'projects-carousel'
    },
    {
      name: 'Contato',
      toolTipText: 'Contato',
      routerLink: 'footer'
    },
  ];

  page: string = "home";

  constructor() { }

  ngOnInit(): void {
  }

}
