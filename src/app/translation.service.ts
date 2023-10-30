import { TranslateService } from "@ngx-translate/core";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {
    // Adicione os idiomas suportados aqui
    this.translate.addLangs(['en', 'pt']);
  }


  // Método para inicializar a configuração de tradução do aplicativo.
  initializeApp() {
    // Obtém o idioma do navegador do usuário e pega apenas o idioma principal.
    const userLanguage = window.navigator.language.split('-')[0];

    // Verifica se o idioma do usuário está disponível no aplicativo.
    if (this.isLanguageAvailable(userLanguage)) {
      // Define o idioma principal como idioma padrão e de uso.
      this.translate.setDefaultLang(userLanguage);
      this.translate.use(userLanguage);
    } else {
      // Se o idioma do usuário não estiver disponível, define o inglês (en) como idioma padrão e de uso.
      this.translate.setDefaultLang('en');
      this.translate.use('en');
    }
    console.log('Language set to: ' + this.translate.currentLang);
  }

  // Método privado para verificar se um idioma está disponível no aplicativo.
  private isLanguageAvailable(lang: string): boolean {
    console.log('Checking if language is available: ' + lang);
    // Lista de idiomas disponíveis no aplicativo (inglês - en e português - pt).
    return ['en', 'pt'].includes(lang);
  }
}
