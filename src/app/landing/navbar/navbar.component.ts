import { Component } from '@angular/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  isDark = false;
  language: 'sw' | 'en';

  constructor(private tService: TranslationService) {
    this.language = this.tService.currentLang();
    this.tService.lang$.subscribe(l => this.language = l);
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark-theme', this.isDark);
  }

  toggleLanguage() {
    this.tService.toggleLanguage();
  }
}
