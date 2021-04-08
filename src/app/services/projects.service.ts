import { Injectable } from '@angular/core';
import { PROJECTS } from '../shared/projects';
import { Project } from '../shared/project';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(PROJECTS).pipe(delay(2000));
  }

}
