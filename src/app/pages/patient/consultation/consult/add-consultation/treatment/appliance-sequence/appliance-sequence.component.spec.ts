import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplianceSequenceComponent } from './appliance-sequence.component';

describe('ApplianceSequenceComponent', () => {
  let component: ApplianceSequenceComponent;
  let fixture: ComponentFixture<ApplianceSequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplianceSequenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplianceSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
