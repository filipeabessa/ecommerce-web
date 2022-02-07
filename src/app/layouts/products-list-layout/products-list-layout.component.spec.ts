import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListLayoutComponent } from './products-list-layout.component';

describe('ProductsListLayoutComponent', () => {
  let component: ProductsListLayoutComponent;
  let fixture: ComponentFixture<ProductsListLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsListLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
