
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class Highlight {

  @Input() appHighlight = false;

  private originalColor: string;

  constructor(private element: ElementRef) {
    this.originalColor =
      this.element.nativeElement.style.backgroundColor;
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.appHighlight) {
      this.element.nativeElement.style.backgroundColor = 'yellow';
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.element.nativeElement.style.backgroundColor =
      this.originalColor;
  }

}
