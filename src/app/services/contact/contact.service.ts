import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../../environments/environment.development';
import { Contact } from '../../models/contact.model';
import { map } from 'rxjs/operators';
import { ReturnedSignInResponse } from '../../models/returned-sign-in.model';
import { ReturnedResponse } from '../../models/returned-response-service.model';
import { RegisterContact } from '../../models/register-contact.model';
import { UpdatedContact } from '../../models/updated-contact.model';
import { UpdatedContactPhone } from '../../models/updated-contact-phone.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private readonly http: HttpClient, private readonly authService: AuthService) { }


  addContact(contact: RegisterContact) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`
    });

    return this.http.post<ReturnedResponse<Contact>>(`${environment.apiUrl}/contacts`, contact, { headers })
      .pipe(map(res => res.result));
  }

  getContact(contactId: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`, // Corrigido o nome do serviço aqui
    });

    return this.http.get<ReturnedResponse<Contact>>(`${environment.apiUrl}/contacts/${contactId}`, { headers }).pipe(map(response => response.result));
  }

  getContacts() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`, // Corrigido o nome do serviço aqui
    });

    return this.http.get<ReturnedResponse<Contact[]>>(`${environment.apiUrl}/contacts`, { headers })
      .pipe(
        map(response => response.result)
      );
  }

  updateFavorite(id: number, isFavorite: boolean) {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${this.authService.getToken()}`,
    });

    return this.http.patch<ReturnedResponse<Contact>>(`${environment.apiUrl}/contacts/${id}`, { isFavorite, }, { headers }).pipe(map((res) => res.result));
  }

  updateContact(id: number, body: UpdatedContact) {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${this.authService.getToken()}`,
    });

    return this.http.patch<ReturnedResponse<Contact>>(`${environment.apiUrl}/contacts/${id}`, { ...body, }, { headers }).pipe(map((res) => res.result));
  }

  delete(id: number) {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${this.authService.getToken()}`,
    });

    return this.http.delete<ReturnedResponse<string>>(`${environment.apiUrl}/contacts/${id}`, {headers});
  }
}
