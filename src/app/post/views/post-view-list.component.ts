import { Component } from '@angular/core';

@Component({
  selector: 'app-post-view-list',
  template: `
    <div>
      post-view-list works!
      <app-post-list-search></app-post-list-search>
      <app-post-list></app-post-list>
      <app-post-list-pagination></app-post-list-pagination>
    </div>
  `,
  styles: ``
})
export class PostViewListComponent {

}
