import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  private resizeObserver: ResizeObserver | undefined;
  private isObserving = false;

  ngOnInit() {
    this.initResizeObserver();
  }

  private initResizeObserver() {
    if (!this.resizeObserver) {
      this.resizeObserver = new ResizeObserver(entries => {
        for (const entry of entries) {
          const ulElement = entry.target as HTMLElement;
          const ulWidth = ulElement.offsetWidth;
          const desiredWidth = 300; // Tamanho desejado para ativar a ação

          // Imprima a largura atual
          console.log('Largura atual da UL:', ulWidth, 'pixels');

          if (ulWidth <= desiredWidth) {
            // Execute a ação desejada aqui
            console.log('A largura da UL atingiu', desiredWidth, 'pixels.');
            // Por exemplo, adicione uma classe ao elemento UL
            this.renderer.addClass(ulElement, 'small-ul');
          } else {
            // Remova a classe se a largura for maior que o valor desejado
            this.renderer.removeClass(ulElement, 'small-ul');
          }
        }
      });
    }
  }

  onResizeStart() {
    if (!this.isObserving) {
      const ulElement = this.elementRef.nativeElement.querySelector('.menu');
      if (ulElement && this.resizeObserver) {
        this.resizeObserver.observe(ulElement);
        this.isObserving = true;
      }
    }
  }

  onResizeEnd() {
    if (this.isObserving && this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.isObserving = false;
    }
  }
}
