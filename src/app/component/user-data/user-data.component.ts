import {
  Component,
  Input,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { User } from '../../interface/User';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { contactNumberValidator, differentNamesValidator, workExperienceValidator, zipCodeValidator } from '../../validators/custom-validators';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
})
export class UserDataComponent {
  @Input() user!: User;
  @Output() editComplete = new EventEmitter<void>();
  show = false;
  form: FormGroup;
  userId!: string;
  mode!: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService
  ) {
    this.form = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', [Validators.required, contactNumberValidator()]],
      dob: [''],
      workExperience: ['', [workExperienceValidator()]],
      addressLine1: [''],
      addressLine2: [''],
      city: [''],
      zip: ['', [zipCodeValidator()]],
      country: [''],
      state: [''],
    }, { validators: differentNamesValidator() });
  }


  open(user?: User) {
    if (user) {
      this.form.patchValue(user);
      this.mode = 'edit';
    } else {
      this.form.reset();
      this.mode = 'add';
    }
    this.show = true;
  }

  onClose() {
    this.show = false;
  }

  onSubmit() {
    
    if (this.form.invalid) {
      return;
    } else if (this.mode === 'edit') {
      this.userService.editUser(this.form.value.id, this.form.value).subscribe({
        next: (response) => {
          this.show = false;
          this.editComplete.emit(); 
        },
      });
    } else {
      this.userService.addUser(this.form.value).subscribe({
        next: (response) => {
          this.show = false;
          this.editComplete.emit(); 
        },
      });
    }
  }

  onDelete() {
    this.userService.deleteUser(this.form.value.id).subscribe({
      next: (data) => {
        console.log('Successfully Deleted!');
        this.show = false;
        this.editComplete.emit();
      },
      error: (error) => {
        console.log('Encountered Error:', error);
      },
    });
  }
}
