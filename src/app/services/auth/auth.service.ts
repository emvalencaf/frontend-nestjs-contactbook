import { Injectable } from '@angular/core';
import { SignIn } from '../../models/sign-in.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReturnedSignInResponse } from '../../models/returned-sign-in.model';
import { environment } from '../../../environments/environment.development';
import { map, tap } from 'rxjs/operators';
import { SignUpUser } from '../../models/sign-up-user.model';
import { ReturnedResponse } from '../../models/returned-response-service.model';
import { ReturnedUser } from '../../models/returned-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }

  public signUp(signUp: SignUpUser) {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    });

    const body = JSON.stringify(signUp);

    return this.http.post<ReturnedResponse<ReturnedUser>>(`${environment.apiUrl}/users`, body, { headers }).pipe(tap(() => console.log("Usuário cadastrado com sucesso")));
  }

  public signIn(signIn: SignIn ) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = JSON.stringify(signIn);

    return this.http.post<ReturnedSignInResponse>(`${environment.apiUrl}/auth`, body, { headers

     }).pipe(map(res => {
      // carregar acessToken
      localStorage.setItem('authToken', res.accessToken);
      return res;
     }));
  }

  public signout(): void {
    localStorage.removeItem('authToken');
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  public getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
