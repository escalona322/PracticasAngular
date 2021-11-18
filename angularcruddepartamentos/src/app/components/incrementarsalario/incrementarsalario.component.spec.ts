import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementarsalarioComponent } from './incrementarsalario.component';

describe('IncrementarsalarioComponent', () => {
  let component: IncrementarsalarioComponent;
  let fixture: ComponentFixture<IncrementarsalarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncrementarsalarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementarsalarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
