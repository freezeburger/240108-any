import { Component, Input } from '@angular/core';

@Component({
  selector: 'ace-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {
  @Input() source:string = '';
  @Input() alternateText:string = '';
}
