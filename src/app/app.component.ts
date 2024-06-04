import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'frontend';
  contact = {
    firstName: "Anthony",
    lastName: "O'Charle",
    email: "aocharle@gmail.com",
    birthday: "1970-04-01",
    isFavorite: true,
    phones: [
      {
        number: "123456789",
        codeArea: "81",
        isTelegram: false,
        isWhatsapp: true,
      },
      {
        number: "987654321",
        codeArea: "81",
        isTelegram: true,
        isWhatsapp: false,
      }
    ],
  }
}
