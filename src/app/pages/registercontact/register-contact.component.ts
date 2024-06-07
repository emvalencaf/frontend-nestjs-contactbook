import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-contact',
  templateUrl: './register-contact.component.html',
  styleUrl: './register-contact.component.css'
})
export class RegisterContactComponent {
  contactForm: FormGroup;

  constructor(private readonly contactService: ContactService, private readonly router: Router, private readonly fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      isFavorite: [false],
      phones: this.fb.array([], [Validators.maxLength(3)]),
    });
  }

  ngOnInit(): void { }

  get phones(): FormArray {
    return this.contactForm?.get('phones') as FormArray;
  }

  addPhone(): void {
    if (this.phones.length < 3) {
      this.phones.push(this.fb.group({
        number: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
        codeArea: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
        isTelegram: [false],
        isWhatsapp: [false],
      }));
    } else {
      console.log('Limite máximo de telefones alcançados');
    }
  }

  removePhone(i: number): void {
    this.phones.removeAt(i);
  }

  onSubmit(): void {
    if (this.contactForm?.valid) {
      this.contactService.addContact(this.contactForm.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.contactForm?.markAllAsTouched();
    }
  }
}
