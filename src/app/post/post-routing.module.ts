import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Local Components
import { PostViewListComponent } from './views/post-view-list.component';
import { PostViewCreationComponent } from './views/post-view-creation.component';
import { PostViewConsultationComponent } from './views/post-view-consultation.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
