import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CategoryPageLayoutComponent } from "./category-page-layout.component";

describe("CategoryPageLayoutComponent", () => {
  let component: CategoryPageLayoutComponent;
  let fixture: ComponentFixture<CategoryPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryPageLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
