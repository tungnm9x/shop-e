import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSalientFeaturesComponent } from './home-salient-features.component';

describe('HomeSalientFeaturesComponent', () => {
  let component: HomeSalientFeaturesComponent;
  let fixture: ComponentFixture<HomeSalientFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSalientFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSalientFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
