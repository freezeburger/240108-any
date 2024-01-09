import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostViewConsultationComponent } from './post-view-consultation.component';

describe('PostViewConsultationComponent', () => {
  let component: PostViewConsultationComponent;
  let fixture: ComponentFixture<PostViewConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostViewConsultationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostViewConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
