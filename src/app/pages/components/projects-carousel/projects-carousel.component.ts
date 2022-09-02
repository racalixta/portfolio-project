import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-carousel',
  templateUrl: './projects-carousel.component.html',
  styleUrls: ['./projects-carousel.component.css']
})
export class ProjectsCarouselComponent implements OnInit {

  projectIds: number[] = [1, 4, 11];
  projectIds2: number[] = [12, 5, 10];
  projectIds3: number[] = [2, 3, 7];
  page: string = "home";

  toTop(): void {
    window.scrollTo(0 , 0);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
