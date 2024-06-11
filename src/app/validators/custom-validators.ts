import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Custom validator to ensure first and last names are not the same
export function differentNamesValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const firstName = control.get('firstName')?.value;
    const lastName = control.get('lastName')?.value;
    return firstName && lastName && firstName === lastName ? { 'sameNames': true } : null;
  };
}

export function contactNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const contactNo = control.value;
    const pattern = /^[0-9]{10}$/;
    return contactNo && !pattern.test(contactNo) ? { 'invalidContactNumber': true } : null;
  };
}

export function workExperienceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const workExperience = control.value;
    const pattern = /^[0-9]{2}$/;
    return workExperience && !pattern.test(workExperience) ? { 'invalidWorkExperience': true } : null;
  };
}

export function zipCodeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const zip = control.value;
    const pattern = /^[0-9]{6}$/;
    return zip && !pattern.test(zip) ? { 'invalidZipCode': true } : null;
  };
}
