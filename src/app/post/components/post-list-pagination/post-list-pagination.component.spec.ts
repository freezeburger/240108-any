import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListPaginationComponent } from './post-list-pagination.component';

describe('PostListPaginationComponent', () => {
  let component: PostListPaginationComponent;
  let fixture: ComponentFixture<PostListPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostListPaginationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
