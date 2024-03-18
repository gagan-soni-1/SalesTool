import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrl: './view-projects.component.scss'
})
export class ViewProjectsComponent implements OnInit {
  projDetails:any;
  ngOnInit(): void {
    this.projDetails = JSON.parse(localStorage.getItem('proj') as string)
      
  }

  ngOnDestroy(){
    localStorage.removeItem('proj')
  }
}
