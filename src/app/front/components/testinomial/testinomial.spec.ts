import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testinomial } from './testinomial';

describe('Testinomial', () => {
  let component: Testinomial;
  let fixture: ComponentFixture<Testinomial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Testinomial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testinomial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
