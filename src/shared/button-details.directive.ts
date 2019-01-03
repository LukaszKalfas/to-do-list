import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appButtonRemove]'
})
export class ButtonDetailsDirective {
@Input()
private spanRemove;

  constructor(private el: ElementRef, private renderer: Renderer2) {
this.spanRemove = this.renderer.createElement('span');
   }

   @HostListener('mouseenter')
   mouseenter() {
     this.spanRemove.innerHTML = 'Remove';
     this.spanRemove.style.position = 'absolute';
     this.spanRemove.style.background = '#59777F';
     this.spanRemove.style.color = '#fff';
    this.spanRemove.style.padding = '5px';
    this.spanRemove.style.borderRadius = '3px';
     this.spanRemove.style.zIndex = '5';
     this.spanRemove.style.fontSize = '8px';
     this.spanRemove.style.top = '-30px';
     this.spanRemove.style.left = '50%';
     this.spanRemove.style.transform = 'translateX(-50%)';
     this.renderer.appendChild(this.el.nativeElement, this.spanRemove);
   }
   @HostListener('mouseleave')
   mouseleave() {
     this.renderer.removeChild(this.el.nativeElement, this.spanRemove);
   }
}
