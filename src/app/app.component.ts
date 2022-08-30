import { Component, OnInit  } from '@angular/core';
import { MenuItem } from './core/models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(){}

  ngOnInit(): void {
  }

  // title = 'portfolio-project';

  // menuItems: MenuItem[] = [
  //   {
  //     name: 'dashboard',
  //     toolTipText: 'Dashboard',
  //     routerLink: '/dashboard'
  //   },
  //   {
  //     name: 'sports_martial_arts',
  //     toolTipText: 'Heroes',
  //     routerLink: '/heroes'
  //   },
  // ];
}
