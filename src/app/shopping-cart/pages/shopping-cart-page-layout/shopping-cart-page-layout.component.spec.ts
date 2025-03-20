import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCardPageLayoutComponent } from './shopping-cart-page-layout.component';

describe('ShoppingCardPageLayoutComponent', () => {
  let component: ShoppingCardPageLayoutComponent;
  let fixture: ComponentFixture<ShoppingCardPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ShoppingCardPageLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCardPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
