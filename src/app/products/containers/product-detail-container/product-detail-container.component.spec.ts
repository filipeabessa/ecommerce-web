import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailContainerComponent } from './product-detail-container.component';

describe('ProductDetailLayoutComponent', () => {
  let component: ProductDetailContainerComponent;
  let fixture: ComponentFixture<ProductDetailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
