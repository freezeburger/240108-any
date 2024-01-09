import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPaginationComponent } from './product-pagination/product-pagination.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductConsumerBase } from './product-consumer.base';
import { ProductViewComponent } from './views/product-view.component';

@NgModule({
  declarations: [
    ProductSearchComponent,
    ProductListComponent,
    ProductPaginationComponent,
    ProductConsumerBase,
    ProductViewComponent
  ],
  providers:[
    ProductService
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    HttpClientModule
  ],
  exports: [
    ProductSearchComponent,
    ProductListComponent,
    ProductViewComponent
  ]
})
export class ProductModule { }
