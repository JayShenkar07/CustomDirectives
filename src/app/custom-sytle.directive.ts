import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomSytle]',
  standalone: true
})
export class CustomSytleDirective {

  constructor(private obj: ElementRef) { 

    this.obj.nativeElement.style.color = 'black'
    this.obj.nativeElement.style.background= 'yellow'
    this.obj.nativeElement.style.fontWeight = 'bold';
  }

}
