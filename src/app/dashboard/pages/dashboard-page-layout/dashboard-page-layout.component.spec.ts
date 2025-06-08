import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DashboardPageLayoutComponent } from "./dashboard-page-layout.component";

describe("DashboardPageLayoutComponent", () => {
  let component: DashboardPageLayoutComponent;
  let fixture: ComponentFixture<DashboardPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPageLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
