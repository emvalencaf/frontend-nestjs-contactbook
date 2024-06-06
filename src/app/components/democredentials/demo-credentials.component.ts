import { Component, EventEmitter, Output } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-demo-credentials',
  templateUrl: './demo-credentials.component.html',
  styleUrl: './demo-credentials.component.css'
})
export class DemoCredentialsComponent {
  @Output() credentialsCopied = new EventEmitter<{ username: string, password: string }>();

  username = environment.demoSigin.username;
  password = environment.demoSigin.password;

  copyCredentials() {
    this.credentialsCopied.emit({ username: this.username, password: this.password });
  }
}
