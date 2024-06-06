import { Component } from '@angular/core';

import { ContactService } from '../../services/contact/contact.service';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.css'
})
export class ListCardComponent {
  contacts: Contact[] = [];
  loading = true;
  error: string | null = null;

  constructor(private readonly contactService: ContactService) {}
  getContacts() {
    return this.contactService.getContacts();
  }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(
      (contacts) => {
        this.contacts = contacts;
        this.loading = false;
      },
      (err) => {
        this.error = 'Error ao carregar contatos';
        this.loading = false;
        console.error(err);
      }
    );
  }

  onContactDeleted(contactId: number) {
    this.contacts = this.contacts.filter(contact => contact.id !== contactId);
  }
}
