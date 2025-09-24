import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateMainCategory } from './admin-update-main-category';

describe('AdminUpdateMainCategory', () => {
  let component: AdminUpdateMainCategory;
  let fixture: ComponentFixture<AdminUpdateMainCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUpdateMainCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUpdateMainCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
