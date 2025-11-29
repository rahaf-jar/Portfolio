import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  checkbox = false;

  nameError = false;
  emailError = false;
  messageError = false;
  checkboxError = false;

  validateName() {
    this.nameError = this.name.trim() === '';
  }

  validateEmail() {
    this.emailError = this.email.trim() === '';
  }

  validateMessage() {
    this.messageError = this.message.trim() === '';
  }

  validateCheckbox() {
    this.checkboxError = !this.checkbox;
  }

  isFormInvalid() {
    return (
      this.name.trim() === '' ||
      this.email.trim() === '' ||
      this.message.trim() === '' ||
      !this.checkbox
    );
  }
}
