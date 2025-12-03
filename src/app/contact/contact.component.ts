import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ScrollService } from '../services/scroll.service';
import { TranslationService } from '../services/translation.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(
    public scroll: ScrollService,
    public translation: TranslationService
  ) {}

  feedbackMessage = '';
  name = '';
  email = '';
  message = '';
  checkbox = false;

  nameError = false;
  emailError = false;
  messageError = false;
  checkboxError = false;

  serviceID = 'service_8l18m27';
  templateID = 'template_wxyaai5';
  publicKey = 'zDS91sITLZSEX-5ke';

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

  sendEmail(event: Event) {
    event.preventDefault();

    emailjs
      .send(
        this.serviceID,
        this.templateID,
        {
          from_name: this.name,
          from_email: this.email,
          message: this.message,
        },
        this.publicKey
      )
      .then(() => {
        this.feedbackMessage = 'Message sent successfully!';
        setTimeout(() => {
          this.feedbackMessage = '';
        }, 3000); 

        this.name = '';
        this.email = '';
        this.message = '';
        this.checkbox = false;
      })
      .catch(() => {
        this.feedbackMessage =
          'Failed to send message. Please try again later.';
        setTimeout(() => {
          this.feedbackMessage = '';
        }, 3000);
      });
  }
}
