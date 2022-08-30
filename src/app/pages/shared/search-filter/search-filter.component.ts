import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/core/models/project.model';
import { ProjectService } from 'src/app/core/services/project.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  techs: string[] = ["HTML5", "CSS3", "JavaScript", "React", "Typescript", "Angular", "Bootstrap", "Tailwind CSS", "SASS"]
  filter: string[] = [];
  projects: Project[] = [];
  index: number[] = [];
  temporaryProjects: Project[] = [];

  @Output() sendFilter = new EventEmitter();

  // newProjects: Project[] = [];
  // tempIds: number[] = [];


  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProject();
  }

  // string[]

  includeFilter(tech: string): void {
    if(this.filter.length > 0) {

        if(this.filter.indexOf(tech) === -1) {
          this.filter.push(tech)
        } else {
          this.filter.splice(this.filter.indexOf(tech));
          console.log('filter => ', this.filter)
          this.index = [];
        }
    } else {
      this.filter.push(tech)
    }
    this.addFilter();
    // return this.filter;
  }



  onChange(event: any, tech: string): void {
    if(event.target.checked) {

      this.filter.push(tech);
      this.addFilter();
      // console.log('add ', tech)
      // console.log('ADDfilter ', this.filter)

    } else {
      // this.filter.splice(this.filter.indexOf(tech), 1);
      this.removeFilter(tech);
      // console.log('remove ', tech)
      // console.log('rFilter ', this.filter)
    }

  }


  getProject(): void {
    this.projectService.getProjects().subscribe(
      (project) => {
        this.projects = project
      }
    );
  }

  removeFilter(tech: string): void {

    // VOU COLOCAR OS PROJECT COM A TECH SELECIONADA EM UM ARRAY E VOU ITERAR SOBRE ESSE ARRAY PRA REMOVER ESSA TECH
    console.log('REMOVENDO ', tech)

    if(this.temporaryProjects.length > 0) {

      this.index = [];
      this.temporaryProjects = [];
      console.log( this.filter )
      this.filter.splice(this.filter.indexOf(tech), 1);


      console.log('remove <------------------')
      console.log( this.index )
      console.log( this.temporaryProjects )
      console.log( this.filter )
      console.log('remove <------------------')

      this.addFilter();

      /*
      for(let project of this.temporaryProjects) {
        for(let proTech of project.techs) {
          if(proTech === tech) {
            // aqui eu tenho que remover o projeto com essa tech do temporaryProjects e dps jogar um addFilter()
            // OU posso remover o tech do filter e rodar um addFilter()
            this.filter.splice(this.filter.indexOf(tech), 1);
            this.temporaryProjects.splice(this.temporaryProjects.indexOf(project), 1);
            console.log('rF fil => ', this.filter)
            console.log('rF tP => ', this.temporaryProjects)
            this.addFilter();

          }
        }
      }
      */
    }

  }

  addFilter(): void {
    //preciso comparar o this.filter com todos os projects.
    for(let item of this.projects) {

      for(let itemTech of item.techs) {
        // comparação do itemTech com filterTech
        for(let filterTech of this.filter) {
          if(itemTech === filterTech) {
            // adiciono o ID do project ao index[]
            if(this.index.indexOf(item.id) === -1) {
              this.index.push(item.id);
              this.temporaryProjects.push(item);

              // console.log("item add = ", item.id)
            }

          /*
            if(this.index.length > 0) {
              if(this.index.indexOf(item.id) === -1) {
                this.index.push(item.id);
                this.temporaryProjects.push(item);

                console.log("item add = ", item.id)
              }

            } else {
              this.index.push(item.id);
              this.temporaryProjects.push(item);

              console.log("length = 0 ", this.index)
            }
          */

          }
        }
      }
    }

    this.feedback();
          // console.log("filter ", this.filter)
          // console.log("index ", this.index)
          // console.log("TROCA <-------------------")
        // this.projectService.getFilter(this.temporaryProjects);
  }

  feedback() {
    this.sendFilter.emit(this.temporaryProjects);
  }

}
