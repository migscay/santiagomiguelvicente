import { Injectable } from '@angular/core';
import { SKILLS } from '../shared/skills';
import { Skill } from '../shared/skill';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  getSkills(): Observable<Skill[]> {
    return of(SKILLS).pipe(delay(2000));
  }

}
