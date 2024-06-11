import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router)
  const email = localStorage.getItem('email')
  const password = localStorage.getItem('password')

  if(!email && !password){
    router.navigate(['login']);
    return false;
  }
  return true;
};
