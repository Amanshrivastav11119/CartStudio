import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Breadcum } from './breadcum';

describe('Breadcum', () => {
  let component: Breadcum;
  let fixture: ComponentFixture<Breadcum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Breadcum]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Breadcum);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
