import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactuspage } from './contactuspage';

describe('Contactuspage', () => {
  let component: Contactuspage;
  let fixture: ComponentFixture<Contactuspage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Contactuspage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contactuspage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
