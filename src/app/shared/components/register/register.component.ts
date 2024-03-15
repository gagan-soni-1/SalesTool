import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      contact: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      email: ['', [Validators.required, Validators.email]],
      companyName: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      description: ['']
    });
  }

  register(){
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }else{
      alert('Form is invalid.');
    }
  }
}
