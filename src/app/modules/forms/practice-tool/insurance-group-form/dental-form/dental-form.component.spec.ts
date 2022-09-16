import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalFormComponent } from './dental-form.component';

describe('DentalFormComponent', () => {
  let component: DentalFormComponent;
  let fixture: ComponentFixture<DentalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DentalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DentalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
