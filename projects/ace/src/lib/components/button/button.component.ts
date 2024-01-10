import { Attribute, Component } from '@angular/core';

@Component({
  selector: 'ace-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  disabled:boolean;

  constructor(
    @Attribute('disabled') disabledAttr:any
  ){
    this.disabled = disabledAttr != null;
  }

}
