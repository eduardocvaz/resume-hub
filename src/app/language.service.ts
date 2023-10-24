import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private _languageChangeSource$ = new Subject<string>();
  changeLanguage( language: string ) {
    this._languageChangeSource$.next(language);
  }

  getLanguageChange() {
    return this._languageChangeSource$.asObservable();
  }

}
