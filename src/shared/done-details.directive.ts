import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDoneDetails]'
})
export class DoneDetailsDirective {
private spanDone: HTMLElement;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.spanDone = this.renderer.createElement('span');
       }
       @HostListener('mouseenter')
       mouseenter() {
         this.spanDone.innerHTML = 'Finished';
         this.spanDone.style.position = 'absolute';
         this.spanDone.style.background = '#59777F';
         this.spanDone.style.color = '#fff';
        this.spanDone.style.padding = '5px';
        this.spanDone.style.borderRadius = '3px';
         this.spanDone.style.zIndex = '5';
         this.spanDone.style.fontSize = '8px';
         this.spanDone.style.top = '-30px';
         this.spanDone.style.left = '50%';
         this.spanDone.style.transform = 'translateX(-50%)';
         this.renderer.appendChild(this.el.nativeElement, this.spanDone);
       }
       @HostListener('mouseleave')
       mouseleave() {
         this.renderer.removeChild(this.el.nativeElement, this.spanDone);
       }
}
