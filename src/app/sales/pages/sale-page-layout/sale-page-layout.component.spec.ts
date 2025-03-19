import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePageLayoutComponent } from './sale-page-layout.component';

describe('SalePageLayoutComponent', () => {
  let component: SalePageLayoutComponent;
  let fixture: ComponentFixture<SalePageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalePageLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalePageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
