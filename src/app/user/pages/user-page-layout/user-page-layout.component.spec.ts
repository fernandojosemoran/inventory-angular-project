import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageLayoutComponent } from './user-page-layout.component';

describe('UserPageLayoutComponent', () => {
  let component: UserPageLayoutComponent;
  let fixture: ComponentFixture<UserPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UserPageLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
