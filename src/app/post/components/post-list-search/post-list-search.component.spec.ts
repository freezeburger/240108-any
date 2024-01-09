import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListSearchComponent } from './post-list-search.component';

describe('PostListSearchComponent', () => {
  let component: PostListSearchComponent;
  let fixture: ComponentFixture<PostListSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostListSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
