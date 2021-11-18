import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosdeptComponent } from './empleadosdept.component';

describe('EmpleadosdeptComponent', () => {
  let component: EmpleadosdeptComponent;
  let fixture: ComponentFixture<EmpleadosdeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosdeptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosdeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
