import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Featurepage } from './featurepage';

describe('Featurepage', () => {
  let component: Featurepage;
  let fixture: ComponentFixture<Featurepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Featurepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Featurepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
