import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminslider } from './adminslider';

describe('Adminslider', () => {
  let component: Adminslider;
  let fixture: ComponentFixture<Adminslider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Adminslider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adminslider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
