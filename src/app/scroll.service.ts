import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  
  scrollToContact() {
    document.getElementById('contact')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

}