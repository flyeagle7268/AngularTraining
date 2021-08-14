import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {
  @HostBinding('class.open') isOpen = false;

  // @HostListener('click') toggleOpen(){
  //   this.isOpen = !this.isOpen;

  // }

  constructor(private elementRef: ElementRef){

  }


  @HostListener('document:click', ['$event']) toggleOpen(event: Event){
    this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;

  }

}
