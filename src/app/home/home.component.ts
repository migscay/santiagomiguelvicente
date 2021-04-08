import { Component, OnInit } from '@angular/core';
import { fade,listAnimation } from 'src/app/shared/animations';
import { SkillsService } from '../services/skills.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fade,
    listAnimation
  ]
})


export class HomeComponent implements OnInit {

  constructor(private skillsService: SkillsService) { }

  skills;

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe(skills => this.skills = skills);
  }

}
