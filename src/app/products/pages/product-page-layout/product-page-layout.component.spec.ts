import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageLayoutComponent } from './product-page-layout.component';

describe('ProductPageLayoutComponent', () => {
  let component: ProductPageLayoutComponent;
  let fixture: ComponentFixture<ProductPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ProductPageLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
