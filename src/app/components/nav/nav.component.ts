import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private readonly authService: AuthService, private readonly router: Router) {

  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  signOut () {
    this.authService.signout();
    this.router.navigate(['/sign-in']);
  }

}
