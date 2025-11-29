import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  
  scrollToContact() {
    document.getElementById('contact')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToFooter() {
    document.getElementById('footer')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToHero() {
    document.getElementById('hero')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

}