import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testinomialpage } from './testinomialpage';

describe('Testinomialpage', () => {
  let component: Testinomialpage;
  let fixture: ComponentFixture<Testinomialpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Testinomialpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testinomialpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
