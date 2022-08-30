import { Component, OnInit } from '@angular/core';
import { TechIconsService } from 'src/app/core/services/tech-icons.service';
import { TECHS } from "src/app/core/services/mock-tech-icons";
import { TechIcons } from 'src/app/core/models/tech-icons.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  techIcons: TechIcons[] = [];

  constructor(private techIconsService: TechIconsService) { }

  ngOnInit(): void {
    this.getTechIcons();
  }

  getTechIcons(): void {
    this.techIcons = this.techIconsService.getTechIcons();
  }

}
