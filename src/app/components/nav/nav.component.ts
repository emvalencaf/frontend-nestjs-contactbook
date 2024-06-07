import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private readonly authService: AuthService) {

  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  signOut () {
    return this.authService.signout();
  }

}
