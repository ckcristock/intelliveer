import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallersInfoComponent } from './callers-info.component';

describe('CallersInfoComponent', () => {
  let component: CallersInfoComponent;
  let fixture: ComponentFixture<CallersInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallersInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
