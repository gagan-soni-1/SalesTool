import { Component, EventEmitter, Output } from '@angular/core';
import { UpdateProfileComponent } from '../../components/update-profile/update-profile.component';
import { ResetPasswordComponent } from '../../components/reset-password/reset-password.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 @Output() togglesidenav = new EventEmitter<boolean>(true);
  constructor(private dialog:MatDialog, private route:Router){}
  openDialog(type:any):void{
    let component:any = type=='profile'?UpdateProfileComponent:type=='password'?ResetPasswordComponent:'';
    this.dialog.open(component)
  }
  toggleSidenav(){
    this.togglesidenav.emit()
  }
  logout(){
    this.route.navigate(['/']);
  }
}
