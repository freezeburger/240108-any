import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostViewListComponent } from './post-view-list.component';

describe('PostViewListComponent', () => {
  let component: PostViewListComponent;
  let fixture: ComponentFixture<PostViewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostViewListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
