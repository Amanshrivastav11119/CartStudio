import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicepage } from './servicepage';

describe('Servicepage', () => {
  let component: Servicepage;
  let fixture: ComponentFixture<Servicepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Servicepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
