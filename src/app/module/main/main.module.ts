import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LoginModule } from '../login/login.module';
import { CustomValidationDirective } from '../../directive/custom-validation.directive';


@NgModule({
  declarations: [
    MainComponent,
    CustomValidationDirective
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    
  ]
})
export class MainModule { }
