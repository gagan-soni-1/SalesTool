import { Component } from '@angular/core';
import { PROJECTS } from '../../org-sales/projects/projects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = PROJECTS;
  constructor(private router:Router){}

  viewProject(proj:any){
    localStorage.setItem('proj',JSON.stringify(proj))
    this.router.navigate(['/portal/org-admin/projects/view'])
  }
}
