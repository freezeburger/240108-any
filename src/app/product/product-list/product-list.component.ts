import { Component, Input, OnInit } from '@angular/core';
import { ProductConsumerBase } from '../product-consumer.base';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent extends ProductConsumerBase implements OnInit{

  @Input() withPagination = false;

  constructor() {
    super();
    console.log('withPagination',this.withPagination)
  }

  ngOnInit(): void {
    this.load();
    console.log('withPagination',this.withPagination)
  }

  ngOnChanges(){
    console.warn('ngOnChanges withPagination',this.withPagination)
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit withPagination',this.withPagination)
  }


}
