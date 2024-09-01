import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  
  const auth=inject(AuthService);
  const routes=inject(Router);

  return auth.user$.pipe(
    map((user)=>{
      if(user)
        {
          return true;
        }
        else{
          routes.navigate(['/auth/login']);
          return false;
        }
    })
  )
};
