import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoComponent } from './components/info/info.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';

import { CardComponent } from './shared/card/card.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';


const COMPONENTS = [
  HomeComponent,
  InfoComponent,
  SkillsComponent,
  ContactComponent,
  ProjectsComponent,
  AboutMeComponent,
  AllProjectsComponent,
];

const SHARED = [
  CardComponent,
  HeaderComponent,
  FooterComponent,
];

@NgModule({
  declarations: [COMPONENTS, SHARED],
  imports: [CommonModule],
  exports: [COMPONENTS, SHARED]
})
export class PagesModule { }
