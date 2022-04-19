import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')onMouseEnter() {
    this.CardHover('gray');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.CardHover('white');
  }

  private CardHover(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}