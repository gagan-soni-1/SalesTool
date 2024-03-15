import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] 
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', Validators.required] 
    });
  }

  login() {
    if (this.loginForm.valid) {
      localStorage.setItem('token','true')
      if(this.loginForm.value.email == "hr@gmail.com"){
        this.router.navigate(['/portal/hr'])
      }else if(this.loginForm.value.email == "sales@gmail.com"){
        this.router.navigate(['/portal/sales'])
      }else if(this.loginForm.value.email == "admin@gmail.com"){
        this.router.navigate(['/portal/admin'])
      }else if(this.loginForm.value.email == "orgadmin@gmail.com"){
        this.router.navigate(['/portal/org-admin'])
      }else{
        alert('No user found.');
      }
    } else {
      alert('Form is invalid.');
    }
  }
}
