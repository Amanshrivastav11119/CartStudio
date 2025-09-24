import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productslider } from './productslider';

describe('Productslider', () => {
  let component: Productslider;
  let fixture: ComponentFixture<Productslider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Productslider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productslider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
