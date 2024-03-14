import { Component } from '@angular/core';
import {MEMBERS} from './members';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent {
	employees = MEMBERS;
  constructor(private router:Router){}

  addMember(){
    let url = this.router.url
    
    if(url == '/portal/hr/members')
    this.router.navigate(['/portal/hr/member/add'])

    if(url == '/portal/org-admin/members')
    this.router.navigate(['/portal/org-admin/member/add'])
  }

}
