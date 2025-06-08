import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ReportPageLayoutComponent } from "./report-page-layout.component";

describe("ReportPageLayoutComponent", () => {
  let component: ReportPageLayoutComponent;
  let fixture: ComponentFixture<ReportPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportPageLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
