import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective{
  @HostBinding('class.show') isOpen = false;

  constructor(private elementRef: ElementRef){

  }

  @HostListener('document:click', ['$event'])
  toggleOpen(event: Event){
    this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

}
