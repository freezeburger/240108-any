import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './product/views/product-view.component';
import { PostViewListComponent } from './post/views/post-view-list.component';
import { PostViewConsultationComponent } from './post/views/post-view-consultation.component';
import { PostViewCreationComponent } from './post/views/post-view-creation.component';

const routes: Routes = [
  {
    title: 'Product Page',
    path: 'products',
    component: ProductViewComponent
  },
  {
    path: 'posts',
    children: [
      {
        title: 'Post List',
        path: 'list',     // posts/list
        component: PostViewListComponent
      },
      {
        title: 'Post Creation',
        path: 'create',   // posts/create
        component: PostViewCreationComponent
      },
      {
        title: 'Post Read',
        path: 'read',     // posts/read
        component: PostViewConsultationComponent
      },
      {
        // path:'',       // posts/
        path:'**',        // posts/ANYTHING_NOT_PREVIOUSLY_DECLARED
        redirectTo:'list',
        pathMatch:'prefix'
      }
    ]
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
