import { Directive, inject } from "@angular/core";
import { CommandType, ProductService } from "./services/product.service";


@Directive({
  selector:'[product-consumer-base]'
})
export class ProductConsumerBase{
  public productService = inject(ProductService);

  public products = this.productService.collection;

  load(){
    this.productService.execute({name:CommandType.GET_ALL,payload:null});
  }

  search(keyword:string){
    this.productService.execute({name:CommandType.SEARCH,payload:keyword});
  }
}
