import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
//import { SkillsService } from '../services/skills.service';
import { fade,listAnimation } from 'src/app/shared/animations';



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

  constructor(private projectsService: ProjectsService) { }
  //constructor(private skillsService: SkillsService) { }

  projects;
  skills;


  ngOnInit(): void {
    this.projectsService.getProjects().subscribe(projects => this.projects = projects);
    //this.skillsService.getSkills().subscribe(skills => this.skills = skills);
  }

}
