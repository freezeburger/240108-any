import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[aceZoom]'
})
export class ZoomDirective {

  @HostBinding('style.transform') transform = 'scale(1)';
  @HostBinding('style.transform-origin') origin = 'center left';
  @HostBinding('style.transition') transition = 'transform 0.5s ease';

  @HostListener('mouseenter')
  zoomIn(){
    this.transform = 'scale(1.2)';
  }

  @HostListener('mouseleave')
  zoomOut(){
    this.transform = 'scale(1)';
  }


}
