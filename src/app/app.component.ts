import { Component, OnChanges, SimpleChanges, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
























  /*
  router = inject(Router);
  menuEntries:MenuItems = [];

  constructor(){
    this.menuEntries = this.router.config
                        .filter( route => route.path != '**' && route.path != undefined)
                        .map( route => ({path:route.path as string, label: (route.title|| route.path) as string }))
  } */

  /* constructor(){
    console.log('1. constructor')
  }

  ngOnInit(){
    console.log('2. ngOnInit')
  }

  ngDoCheck(){
    console.log('3. ngDoCheck')
  }

  ngOnDestroy(){
    console.log('3. ngDoCheck')
  }
 */
