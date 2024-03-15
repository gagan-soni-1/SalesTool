import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit {
  passwordForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      inputPasswordOld: ['', Validators.required],
      inputPasswordNew: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('[^\s]+')]],
      inputPasswordNewVerify: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const newPassControl = formGroup.get('inputPasswordNew');
    const verifyPassControl = formGroup.get('inputPasswordNewVerify');

    if (newPassControl?.value !== verifyPassControl?.value) {
      verifyPassControl?.setErrors({ mismatch: true });
    } else {
      verifyPassControl?.setErrors(null);
    }
  }

  onSubmit() {
   console.log(this.passwordForm.value);
  }

  onCancel(){
    
  }
}
