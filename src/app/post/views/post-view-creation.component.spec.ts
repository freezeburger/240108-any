import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostViewCreationComponent } from './post-view-creation.component';

describe('PostViewCreationComponent', () => {
  let component: PostViewCreationComponent;
  let fixture: ComponentFixture<PostViewCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostViewCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostViewCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
