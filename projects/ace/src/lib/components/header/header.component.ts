import { Component, Input } from '@angular/core';

@Component({
  selector: 'ace-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() menuItems:MenuItems = [];
}

export interface MenuItem{
  path:string,
  label:string
}

export type MenuItems = MenuItem[];
