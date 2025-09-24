import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMainCategory } from './admin-main-category';

describe('AdminMainCategory', () => {
  let component: AdminMainCategory;
  let fixture: ComponentFixture<AdminMainCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminMainCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMainCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
