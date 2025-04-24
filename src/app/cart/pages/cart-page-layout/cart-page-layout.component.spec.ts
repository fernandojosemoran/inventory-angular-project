import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPageLayoutComponent } from './cart-page-layout.component';

describe('CartPageLayoutComponent', () => {
  let component: CartPageLayoutComponent;
  let fixture: ComponentFixture<CartPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CartPageLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
