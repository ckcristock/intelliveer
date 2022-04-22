import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalGuardianComponent } from './legal-guardian.component';

describe('LegalGuardianComponent', () => {
  let component: LegalGuardianComponent;
  let fixture: ComponentFixture<LegalGuardianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalGuardianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalGuardianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
