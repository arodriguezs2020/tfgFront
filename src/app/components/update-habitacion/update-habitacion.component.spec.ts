import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHabitacionComponent } from './update-habitacion.component';

describe('UpdateHabitacionComponent', () => {
  let component: UpdateHabitacionComponent;
  let fixture: ComponentFixture<UpdateHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHabitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
