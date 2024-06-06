import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;
  router: Router;

  constructor(private fb: FormBuilder, private authService: AuthService, router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.router = router;
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      this.authService.signIn({username, password}).subscribe({
        next: res => {
          console.log('login successful', res);
          this.router.navigate(['/']);
        },
        error: err => {
          this.errorMessage = 'Invalid username or password';
          console.error('Sigin error', err);
          alert(err?.error?.message);
        }
      });
    }
  }

  onCredentialsCopied(credentials: { username: string, password: string }): void {
    this.loginForm.patchValue({
      username: credentials.username,
      password: credentials.password
    });
  }
}
