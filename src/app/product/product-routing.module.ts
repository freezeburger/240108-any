import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './views/product-view.component';

// Local Components

const routes: Routes = [
      {
        title: 'Products',
        path: '',
        component: ProductViewComponent
      },
      {
        path:'**',
        redirectTo:'',
        pathMatch:'prefix'
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
