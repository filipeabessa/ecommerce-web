import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditCardComponent } from './product-edit-card.component';

describe('ProductEditCardComponent', () => {
  let component: ProductEditCardComponent;
  let fixture: ComponentFixture<ProductEditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
