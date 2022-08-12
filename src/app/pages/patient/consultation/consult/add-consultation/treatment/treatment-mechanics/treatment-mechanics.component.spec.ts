import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentMechanicsComponent } from './treatment-mechanics.component';

describe('TreatmentMechanicsComponent', () => {
  let component: TreatmentMechanicsComponent;
  let fixture: ComponentFixture<TreatmentMechanicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentMechanicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentMechanicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
