import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    title: 'Product Page',
    path: 'products',
    loadChildren:()=>import('./product/product.module').then(m => m.ProductModule )
  },
  {
    path: 'posts',
    loadChildren:()=>import('./post/post.module').then(m => m.PostModule )
  },
  {
    path:'**',
    redirectTo:'products',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
