import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/core/models/menu-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() toolTips: MenuItem[] = [];
  @Input() page: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
