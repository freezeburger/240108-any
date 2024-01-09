import { Component } from '@angular/core';

@Component({
  selector: 'app-product-view',
  template: `
    <div>

      <app-product-search></app-product-search>

      <app-product-list [withPagination]="true"></app-product-list>

    </div>
  `,
  styles: ``
})
export class ProductViewComponent {

}
