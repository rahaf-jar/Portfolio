import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private langSubject = new BehaviorSubject<'EN' | 'DE'>('EN');
  currentLang$ = this.langSubject.asObservable();
  private translations: any = {};

  constructor(private http: HttpClient) {
    const savedLang = localStorage.getItem('lang') as 'EN' | 'DE';
    if (savedLang) this.langSubject.next(savedLang);
    this.loadTranslations(this.langSubject.value);
  }

  setLanguage(lang: 'EN' | 'DE') {
    this.langSubject.next(lang);
    localStorage.setItem('lang', lang);
    this.loadTranslations(lang);
  }

  private loadTranslations(lang: 'EN' | 'DE') {
    this.http.get(`assets/i18n/${lang.toLowerCase()}.json`).subscribe(
      (data) => this.translations = data,
      (err) => console.error('Error loading translations', err)
    );
  }

  t(key: string): string {
    return key.split('.').reduce((obj: any, k: string) => obj?.[k], this.translations) || key;
  }
}
