import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListSearchComponent } from './components/post-list-search/post-list-search.component';
import { PostListPaginationComponent } from './components/post-list-pagination/post-list-pagination.component';
import { PostCreationFormComponent } from './components/post-creation-form/post-creation-form.component';
import { PostConsultationComponent } from './components/post-consultation/post-consultation.component';
import { PostActionsComponent } from './components/post-actions/post-actions.component';
import { PostViewListComponent } from './views/post-view-list.component';
import { PostViewCreationComponent } from './views/post-view-creation.component';
import { PostViewConsultationComponent } from './views/post-view-consultation.component';
import { PostService } from './services/post.service';
import { PostRoutingModule } from './post-routing.module';


@NgModule({
  declarations: [
    PostListComponent,
    PostListSearchComponent,
    PostListPaginationComponent,
    PostCreationFormComponent,
    PostConsultationComponent,
    PostActionsComponent,
    PostViewListComponent,
    PostViewCreationComponent,
    PostViewConsultationComponent
  ],
  providers:[
    PostService
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  exports: [
    PostListComponent,
    PostListSearchComponent,
    PostListPaginationComponent,
    PostCreationFormComponent,
    PostConsultationComponent,
    PostActionsComponent,
    PostViewListComponent,
    PostViewCreationComponent,
    PostViewConsultationComponent
  ]
})
export class PostModule { }
