import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarHabitacionComponent } from './seleccionar-habitacion.component';

describe('SeleccionarHabitacionComponent', () => {
  let component: SeleccionarHabitacionComponent;
  let fixture: ComponentFixture<SeleccionarHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionarHabitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
