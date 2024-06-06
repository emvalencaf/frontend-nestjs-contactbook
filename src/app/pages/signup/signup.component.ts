import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpUser } from '../../models/sign-up-user.model';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signUpForm: FormGroup;
  errorMessage: string | null | undefined;

  constructor(private fb: FormBuilder, private readonly authService: AuthService, private readonly router: Router) {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', Validators.required],
      birthday: ['', Validators.required]
    });

    this.authService = authService;
    this.router = router;
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.signUpForm.valid) {
      const username = this.signUpForm.get('username')?.value;
      const password = this.signUpForm.get('password')?.value;
      const firstName = this.signUpForm.get('firstName')?.value;
      const lastName = this.signUpForm.get('lastName')?.value;
      const email = this.signUpForm.get('email')?.value;
      const birthday = this.signUpForm.get('birthday')?.value;

      this.authService.signUp({ username, password, firstName, lastName, email, birthday }).subscribe({
        next: () => {
          this.authService.signIn({username, password}).subscribe({
            next: () => {
              console.log('Login bem-sucedido após o cadastro');
              this.router.navigate(['/']);
            }
          })
        },
        error: err => {
          this.errorMessage = 'Não pode ser criado';
          console.error('Sigin error', err);
          alert(err?.error?.message);
        }
      });
    }
  }
}
