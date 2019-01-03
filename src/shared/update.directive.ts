import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appUpdate]'
})
export class UpdateDirective {
  private spanUpdate: HTMLElement;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.spanUpdate = this.renderer.createElement('span');
       }
       @HostListener('mouseenter')
       mouseenter() {
         this.spanUpdate.innerHTML = 'Update status';
         this.spanUpdate.style.position = 'absolute';
         this.spanUpdate.style.background = '#59777F';
         this.spanUpdate.style.color = '#fff';
        this.spanUpdate.style.padding = '5px';
        this.spanUpdate.style.borderRadius = '3px';
         this.spanUpdate.style.zIndex = '5';
         this.spanUpdate.style.fontSize = '8px';
         this.spanUpdate.style.top = '-30px';
         this.spanUpdate.style.left = '50%';
         this.spanUpdate.style.transform = 'translateX(-50%)';
         this.renderer.appendChild(this.el.nativeElement, this.spanUpdate);
       }
       @HostListener('mouseleave')
       mouseleave() {
         this.renderer.removeChild(this.el.nativeElement, this.spanUpdate);
       }

}
