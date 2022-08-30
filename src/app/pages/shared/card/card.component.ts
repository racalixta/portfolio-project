import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/core/models/project.model';
import { ProjectService } from 'src/app/core/services/project.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() index: number[] = [];
  @Input() page: string = "";
  @Input() projectsFilter: Project[] = [];

  projects: Project[] = [];
  projectsCarousel: Project[] = [];
  carousel: object[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProject();
    this.getCarousel();
  }

  getProject(): void {
    this.projectService.getProjects().subscribe(
      (project) => this.projects = project
    );
  }

  getCarousel(): void {
    this.projectsCarousel = this.projectService.getCarousel(this.index, this.projects)
  }

}
