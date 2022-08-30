import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project.model';
import { PROJECTS } from './mock-projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  getProjects(): Observable<Project[]> {
    const projects = of(PROJECTS);
    return projects;
  }

  getCarousel(index: number[], projects: Project[]): Project[] {
    const project = [...projects];
    let carousel: Project[] = [];

    project.filter((item) => {
      for(let id of index) {
        if(item.id === id) {
          carousel.push(item);
        }
      }
    })

    return carousel;
  }

  getFilter(projects: Project[]): Project[] {
    return projects;
  }

}
