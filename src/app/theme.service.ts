import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeKey = 'theme';
  private darkMode: boolean = false;


  constructor() { }

  isDarkMode() {
    return this.darkMode;
  }

  setDarkMode(isDarkMode: boolean) {
    this.darkMode = isDarkMode;
    console.log(this.darkMode)
    if (isDarkMode) {
      console.log(document.body.classList)
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}
