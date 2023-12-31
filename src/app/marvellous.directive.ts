import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appMarvellous,appMarvellous2 ]',
  standalone: true
})

export class MarvellousDirective {

  //parametrized constructor
  //Ya class cha ek object create hoto ani tyala parameter mhanun elementref cha object pass hoto (Dependency injection)


  constructor(private obj: ElementRef) 
  {}

  //mouse enter method
  @HostListener ('mouseenter') onmouseenter()
  {
    this.obj.nativeElement.style.color = 'blue'
  }


//mouse leave enter
  @HostListener ('mouseleave') onmouseleave()
  {
    this.obj.nativeElement.style.color = 'red'
  }

}

