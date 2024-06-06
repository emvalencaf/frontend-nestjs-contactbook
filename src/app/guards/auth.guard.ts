import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (state.url === "/sign-up")
    return authService.isAuthenticated() ?
      router.createUrlTree(['/'])
      : true;

  if (state.url === "/sign-in")
      return authService.isAuthenticated() ? router.createUrlTree(['/']) : true;

  if (authService.isAuthenticated()) {
    return true;
  }

  return router.createUrlTree(['/sign-in']);
};
