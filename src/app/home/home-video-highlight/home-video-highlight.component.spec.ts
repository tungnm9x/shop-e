import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVideoHighlightComponent } from './home-video-highlight.component';

describe('HomeVideoHighlightComponent', () => {
  let component: HomeVideoHighlightComponent;
  let fixture: ComponentFixture<HomeVideoHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeVideoHighlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeVideoHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
