import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { DemoCredentialsComponent } from './components/democredentials/demo-credentials.component';
import { provideHttpClient } from '@angular/common/http';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { RegisterContactComponent } from './pages/registercontact/register-contact.component';
import { UpdateContactComponent } from './pages/update-contact/update-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SigninComponent,
    NavComponent,
    DemoCredentialsComponent,
    SignupComponent,
    HomeComponent,
    ListCardComponent,
    RegisterContactComponent,
    UpdateContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule { }
