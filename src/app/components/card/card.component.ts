import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactPhone } from '../../models/contact-phone.model';
import { ContactService } from '../../services/contact/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Output() contactDeleted = new EventEmitter<number>();
  @Input() contact: Contact | null = null;
  constructor(private readonly contactService: ContactService, private readonly router: Router) {}

  getPhones(): ContactPhone[] | undefined | null {
    return this.contact?.phones;
  }

  delete() {
    if (!this.contact?.id) return alert("Nenhum id foi atrelado ao contato");

    this.contactService.delete(this.contact.id).subscribe(() => {
      this.contactDeleted.emit(this.contact?.id);
    }, (err) => {
      console.error('Erro ao deletar o contato', err);
      alert('Erro ao deletar');
    });
  }

  updateContact() {
    if (!this.contact?.id) return alert("Nenhum id foi atrelado ao contato");

    this.router.navigate([`/update-contact/${this.contact.id}`]);
  }

  updateFavorite() {
    if (!this.contact?.id) return alert("Nenhum id foi atrelado ao contato");

    return this.contactService.updateFavorite(this.contact?.id , !this.contact?.isFavorite).subscribe((updatedContact) => {
      if (this.contact) {
        this.contact.isFavorite = updatedContact.isFavorite;
      }
    }, (err) => {
      console.error('Error ao atualizar favorito:', err);
      alert('Erro ao atualizar');
    })
  }
}
