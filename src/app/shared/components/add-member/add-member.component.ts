import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MEMBERS } from '../members/members';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrl: './add-member.component.scss'
})
export class AddMemberComponent {
  roles: string[] = ['HR', 'Sales'];
  memberForm: FormGroup;
  constructor(private fb: FormBuilder, private router:Router) {
    this.memberForm = this.fb.group({
      name: [''],
      email: [''],
      contactNumber: [''],
      role: ['']
    })
  }
  
  addMember(e: any) {
    e.preventDefault();
    MEMBERS.push(this.memberForm.value)
    this.memberForm.reset()
  }

  cancel() {
    this.memberForm.reset()
  }

  goBack(){
    let url = this.router.url
    
    if(url == '/portal/hr/member/add')
    this.router.navigate(['/portal/hr/members'])

    if(url == '/portal/org-admin/member/add')
    this.router.navigate(['/portal/org-admin/members'])
  }

}
