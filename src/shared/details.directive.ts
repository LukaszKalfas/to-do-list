import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';



@Directive({
  selector: '[appDetails]'
})
export class DetailsDirective {
  @Input()
  date: Date;
  @Input()
  description: string;
  @Input()
  task;

  private paragraphDate; // <p>
  private paragraph;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraphDate = this.renderer.createElement('p');
    this.paragraph = this.renderer.createElement('p');
   }

   @HostListener('mouseenter')
   mouseenter(eventDate: Event) {
     this.paragraphDate.innerHTML = this.date;
    this.paragraphDate.style.fontSize = '10px';
    this.paragraphDate.style.position = 'absolute';
    this.paragraphDate.style.bottom = '0';
    this.paragraphDate.style.right = '20px';
    this.renderer.appendChild(this.el.nativeElement, this.paragraphDate);


     this.paragraph.innerHTML = this.description;
     this.paragraph.style.width = '80%';
    this.paragraph.style.fontSize = '15px';
     this.renderer.appendChild(this.el.nativeElement, this.paragraph);
   }

   @HostListener('mouseleave')
   mouseleave(eventDate: Event) {
     this.renderer.removeChild(this.el.nativeElement, this.paragraphDate);
     this.renderer.removeChild(this.el.nativeElement, this.paragraph);
   }
}
