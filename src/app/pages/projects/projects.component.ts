import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/core/models/menu-item.model';
import { Project } from 'src/app/core/models/project.model';
import { ProjectService } from 'src/app/core/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

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

  page: string = "projects";
  projectsFilter: Project[] = [];
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProject();
  }

  getProject(): void {
    this.projectService.getProjects().subscribe(
      (project) => this.projects = project
    );
  }

  getFilter(temporaryProjects: any): Project[] {
    this.projectsFilter = temporaryProjects;
    console.log('projects TP => ', temporaryProjects)
    console.log('projects TP => ', this.projectsFilter)
    return this.projectsFilter
  }


}
