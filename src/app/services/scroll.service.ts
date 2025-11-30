import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  
  scrollTo(component: string): void {
    document.getElementById(component)
      ?.scrollIntoView({ behavior: 'smooth' });
  }

}