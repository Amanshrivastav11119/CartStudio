import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateMainCategory } from './admin-create-main-category';

describe('AdminCreateMainCategory', () => {
  let component: AdminCreateMainCategory;
  let fixture: ComponentFixture<AdminCreateMainCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCreateMainCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCreateMainCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
