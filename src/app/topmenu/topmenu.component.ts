import {Component, Type} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { environment } from '../../environments/environment';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import {AboutComponent} from "../about/about.component";
import {ContactComponent} from "../contact/contact.component";

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css'],
  providers: [DialogService]
})
export class TopmenuComponent {
  items: any[] = [];
  user: any;
  isDropdownMenuOpen: boolean = false;
  topmenu: string[] = [];
  imageUrl = environment.imageUrl;
  ref: DynamicDialogRef | undefined;


  constructor(
    private translate: TranslateService,
    public dialogService: DialogService
  ) {
    this.setDynamicStyle(); // Chama a função para definir o estilo dinamicamente
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
          {label: this.topmenu[2], icon: 'fa fa-info-circle', command: () => this.show(AboutComponent, this.topmenu[2])},
          {label: this.topmenu[3], icon: 'fa fa-envelope', command: () => this.show(ContactComponent, this.topmenu[3])}
        ]
      }
    ];
  }


  show(componentType: Type<any>, header: string) {
    this.ref = this.dialogService.open(componentType, {
      header: header,
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });

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
  private setDynamicStyle() {
    // Defina uma classe CSS dinamicamente com a URL da image
    const styleElement = document.createElement('style');
    styleElement.textContent = `.user-icon { background-image: url('${this.imageUrl}'); }`;

    // Adicione o estilo ao cabeçalho do documento
    document.head.appendChild(styleElement);
  }
}