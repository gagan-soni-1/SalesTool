import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  @ViewChild('drawer') drawer:any;
  toggleSidenav(){
    this.drawer.toggle();
  }
}
