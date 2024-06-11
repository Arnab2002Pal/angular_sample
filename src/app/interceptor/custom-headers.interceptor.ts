import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const customHeadersInterceptor: HttpInterceptorFn = (req, next) => {
  const token = "This is a token"
  const authReq = req.clone({
    setHeaders: {
      Authorization: token
    }
  });
  return next(authReq).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          console.error('Unauthorized request:', err);
        } else {
          console.error('HTTP error:', err);
        }
      } else {
        console.error('An error occurred:', err);
      }

      return throwError(() => err); 
    })
  );;
};



