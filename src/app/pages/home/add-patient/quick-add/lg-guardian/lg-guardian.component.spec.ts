import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgGuardianComponent } from './lg-guardian.component';

describe('LgGuardianComponent', () => {
  let component: LgGuardianComponent;
  let fixture: ComponentFixture<LgGuardianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgGuardianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgGuardianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
