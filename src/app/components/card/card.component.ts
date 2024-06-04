import { Component, Input } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactPhone } from '../../models/contact-phone.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() contact: Contact | null = null;

  getPhones(): ContactPhone[] | undefined | null {
    return this.contact?.phones;
  }
}
