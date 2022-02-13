import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductCardComponent } from './create-product-card.component';

describe('CreateProductCardComponent', () => {
  let component: CreateProductCardComponent;
  let fixture: ComponentFixture<CreateProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
