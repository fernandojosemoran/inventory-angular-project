import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePageLayoutComponent } from './purchase-page-layout.component';

describe('PurchasePageLayoutComponent', () => {
  let component: PurchasePageLayoutComponent;
  let fixture: ComponentFixture<PurchasePageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasePageLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasePageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
