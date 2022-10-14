import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewProductsComponent } from './home-new-products.component';

describe('HomeNewProductsComponent', () => {
  let component: HomeNewProductsComponent;
  let fixture: ComponentFixture<HomeNewProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNewProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeNewProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
