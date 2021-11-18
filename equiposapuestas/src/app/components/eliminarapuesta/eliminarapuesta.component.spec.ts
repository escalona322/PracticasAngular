import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarapuestaComponent } from './eliminarapuesta.component';

describe('EliminarapuestaComponent', () => {
  let component: EliminarapuestaComponent;
  let fixture: ComponentFixture<EliminarapuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarapuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarapuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
