import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent {
  items: any[] = [];
  user: any;
  isDropdownMenuOpen: boolean = false;
  topmenu: string[] = [];

  constructor(
    private translate: TranslateService,
  ) {
    this.user = {
      name: 'Eduardo Vaz',
      photoUrl: 'https://avatars.githubusercontent.com/u/61214197'
    };

    // Obtém os idiomas traduzidos e, em seguida, cria os itens do menu
    this.translate.get('topmenu').subscribe((res: string[]) => {
      this.topmenu = res;
      this.createMenuItems(); // Chama a função para criar os itens do menu
    });
  }

  createMenuItems() {
    this.items = [
      {
        icon: 'fa fa-language large-icon',

        items: [
          {label: this.topmenu[0], icon: 'pi pi-flag', command: () => this.changeLanguage('pt')},
          {label: this.topmenu[1], icon: 'pi pi-flag', command: () => this.changeLanguage('en')}
        ]
      },
      {
        label: this.user.name,
        icon: 'user-icon',
        items: [
          {label: this.topmenu[2], icon: 'fa fa-info-circle'},
          {label: this.topmenu[3], icon: 'fa fa-envelope'}
        ]
      }
    ];
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.translate.get('topmenu').subscribe((res: string[]) => {
      this.items[0].items[0].label = res[0];
      this.items[0].items[1].label = res[1];
      this.items[1].items[0].label = res[2];
      this.items[1].items[1].label = res[3];
    });

  }

  toggleDropdownMenu() {
    this.isDropdownMenuOpen = !this.isDropdownMenuOpen;
  }
}
