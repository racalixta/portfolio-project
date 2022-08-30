import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/core/models/menu-item.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() menuItems: MenuItem[] = [];
  @Input() page: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
