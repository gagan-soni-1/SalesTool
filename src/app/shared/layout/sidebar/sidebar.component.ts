import { Component, OnInit } from '@angular/core';
import * as RoleMenu from './menus'
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  menus:any;
  url:string;
  constructor(private router:Router){
    this.url = this.router.url;
  }
  ngOnInit(): void {
    const role =  atob(localStorage.getItem('role') as string)
    if(role == 'admin'){
      this.menus= RoleMenu.adminMenu;
    }
    if(role == 'org-admin'){
      this.menus = RoleMenu.orgAdminMenu;
    }
    if(role == 'hr'){
      this.menus = RoleMenu.hrMenu;
    }
    if(role == 'sales'){
      this.menus = RoleMenu.salesMenu;
    }
  }
  
  openMenu(menu:any):void{
    if(menu.link){
    this.url = menu.link;
    this.router.navigate([menu.link])
    }
  }

}
