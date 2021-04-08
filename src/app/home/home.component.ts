import { Component, OnInit } from '@angular/core';
import { fade,listAnimation } from 'src/app/shared/animations';
import { SkillsService } from '../services/skills.service';
import { Dish } from '../shared/dish';

import { DishService } from '../services/dish.service';


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
  //constructor(private dishService: DishService) { }

  skills;

  // dishes;

  // dish = Dish; 

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe(skills => this.skills = skills);
    //this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
  }

}
