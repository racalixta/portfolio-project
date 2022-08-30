import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { InfoComponent } from './components/info/info.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsCarouselComponent } from './components/projects-carousel/projects-carousel.component';
import { AboutMeComponent } from './components/about-me/about-me.component';


import { CardComponent } from './shared/card/card.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { SearchFilterComponent } from './shared/search-filter/search-filter.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const COMPONENTS = [
  HomeComponent,
  InfoComponent,
  SkillsComponent,
  ContactComponent,
  ProjectsCarouselComponent,
  ProjectsComponent,
  AboutMeComponent,
  SearchFilterComponent,
  ToolbarComponent,
];

const SHARED = [
  CardComponent,
  HeaderComponent,
  FooterComponent,
  PageNotFoundComponent,
];

@NgModule({
  // declarations: [COMPONENTS, SHARED, ProjectsComponent, SearchFilterComponent, ToolbarComponent, PageNotFoundComponent],
  declarations: [COMPONENTS, SHARED],
  imports: [CommonModule, AppRoutingModule],
  exports: [COMPONENTS, SHARED]
})
export class PagesModule { }
