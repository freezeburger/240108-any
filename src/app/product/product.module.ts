import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';

import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPaginationComponent } from './product-pagination/product-pagination.component';
import { ProductViewComponent } from './views/product-view.component';

import { ProductConsumerBase } from './product-consumer.base';
import { ProductService } from './services/product.service';

import { ProductRoutingModule } from './product-routing.module';

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
    SharedModule,
    ProductRoutingModule
  ],
  exports: [
    ProductSearchComponent,
    ProductListComponent,
    ProductViewComponent
  ]
})
export class ProductModule { }
