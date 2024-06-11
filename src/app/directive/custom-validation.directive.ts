import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomValidation]'
})
export class CustomValidationDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click') onClick(){
    this.el.nativeElement.style.color = 'red';
  }

  
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color ='purple';
  }
  
  @HostListener('mouseout') onMouseLeave() {
    this.el.nativeElement.style.color ='black';
  }
}
