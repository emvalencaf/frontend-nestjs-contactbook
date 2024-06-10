import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
  contactForm: FormGroup;
  contactId: number | undefined;

  constructor(private readonly route: ActivatedRoute,
              private readonly router: Router,
              private readonly fb: FormBuilder,
              private readonly contactService: ContactService) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      isFavorite: [false],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.contactId = Number(params['id']);
      this.contactService.getContact(this.contactId).subscribe(contact => {
        console.log(this.contactId);
        console.log(contact);
        this.contactForm.patchValue({
          firstName: contact.firstName,
          lastName: contact.lastName,
          birthday: contact.birthday,
          email: contact.email,
        });
      });
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      if (!this.contactId) return console.log('Erro não há id do contato');

      this.contactService.updateContact(this.contactId, this.contactForm.value).subscribe(() => this.router.navigate(['/']));

    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
