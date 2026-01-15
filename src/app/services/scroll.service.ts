import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scrollTo(component: string): void {
    const el = document.getElementById(component);
    if (!el) return;

    const header = document.querySelector('app-header') as HTMLElement;
    const headerHeight = header?.offsetHeight || 110;

    const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: top,
      behavior: 'smooth'
    });
  }
}
