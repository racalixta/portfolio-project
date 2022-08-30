import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/core/models/menu-item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      name: 'Página Inicial',
      toolTipText: 'Home',
      routerLink: '/home#info'
    },
    {
      name: 'Sobre',
      toolTipText: 'Sobre',
      routerLink: '/home#about-me'
    },
    {
      name: 'Habilidades',
      toolTipText: 'Habilidades',
      routerLink: '/home#skills'
    },
    {
      name: 'Projetos',
      toolTipText: 'Projetos',
      routerLink: '/home#projects-carousel'
    },
    {
      name: 'Contato',
      toolTipText: 'Contato',
      routerLink: '/home#footer'
    },
  ];

  page: string = "home";

  constructor() { }

  ngOnInit(): void {
  }

}
