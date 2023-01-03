import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTableRowHover]'
})
export class TableRowHoverDirective {

  constructor(private renderer: Renderer2, private elementRef:ElementRef) { }

  @HostListener('mouseenter') mouseenter(eventData: Event){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#90EE90');
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }

}
