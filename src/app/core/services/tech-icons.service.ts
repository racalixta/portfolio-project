import { Injectable } from '@angular/core';
import { TechIcons } from "../models/tech-icons.model";
import { TECHS } from './mock-tech-icons';

@Injectable({
  providedIn: 'root'
})
export class TechIconsService {

  getTechIcons(): TechIcons[] {
    return TECHS;
  }
}
