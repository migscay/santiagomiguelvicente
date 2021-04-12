import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
//import { SkillsService } from '../services/skills.service';
import { fade,listAnimation } from 'src/app/shared/animations';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    fade,
    listAnimation
  ]
})
export class ProjectsComponent implements OnInit {

  constructor(private projectsService: ProjectsService,public MediaObserver:MediaObserver) { }
  //constructor(private skillsService: SkillsService) { }

  projects;
  skills;
  mediaSub:Subscription;
  deviceXs:boolean;

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe(projects => this.projects = projects);
    this.mediaSub = this.MediaObserver.media$.subscribe((result:MediaChange)=>
    {console.log(result.mqAlias);
     this.deviceXs = result.mqAlias === 'xs' ? true : false;
    })
  }

  ngOnDestroy(){
    this.mediaSub.unsubscribe;
  }

}
