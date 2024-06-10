import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { authGuard } from './guards/auth.guard';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterContactComponent } from './pages/registercontact/register-contact.component';
import { UpdateContactComponent } from './pages/update-contact/update-contact.component';
export const routes: Routes = [
  {
    path:"sign-in", component: SigninComponent, canActivate: [authGuard],
  },
  {
    path:"sign-up", component: SignupComponent, canActivate:[authGuard],
  },
  {
    path: 'register-contact', component: RegisterContactComponent, canActivate:[authGuard],
  },
  { path: 'update-contact/:id', component: UpdateContactComponent, canActivate: [authGuard] },
  {
    path:'', component: HomeComponent, canActivate:[authGuard],
  },
  {
    path: '**', redirectTo: '', canActivate: [authGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
