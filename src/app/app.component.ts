import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(){
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

}
