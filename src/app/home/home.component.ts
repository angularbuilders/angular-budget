import { Component, OnInit } from '@angular/core';
import { PROJECTS } from 'src/data/projects.data';
import { Project } from '../core/model/project.interface';

@Component({
  selector: 'ab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  projects: Project[] = PROJECTS;

  constructor() {}

  ngOnInit(): void {
    this.projects.forEach(project => {
      project.totalExpenses = project.expenses
        .map(expense => expense.amount)
        .reduce((accumulator, current) => accumulator + current);
    });
  }
}
