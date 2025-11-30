import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollService } from '../scroll.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(public scroll: ScrollService) {}

  name = '';
  email = '';
  message = '';
  checkbox = false;

  nameError = false;
  emailError = false;
  messageError = false;
  checkboxError = false;

  validateName() {
    this.nameError = this.name.trim().length < 3;
  }

  validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailError = !emailPattern.test(this.email);
  }

  validateMessage() {
    this.messageError = this.message.trim().length < 10;
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
