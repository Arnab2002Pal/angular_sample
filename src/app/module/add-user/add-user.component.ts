import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService,
    private router: Router
  ) {
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      contactNo: [''],
      dob: [''],
      workExperience: [''],
      addressLine1: [''],
      addressLine2: [''],
      city: [''],
      zip: [''],
      country: [''],
      state: [''],
    });
  }

  onSubmit() {
    this.userService
      .addUser(this.form.value)
      .subscribe((user) => console.log(user));
      
    this.router.navigate(['dashboard'])
  }
}
