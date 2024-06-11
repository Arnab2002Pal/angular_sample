import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUserRoutingModule } from './add-user-routing.module';
import { AddUserComponent } from './add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from '../../component/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AddUserComponent
    
  ],
  imports: [
    CommonModule,
    AddUserRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AddUserModule { }
