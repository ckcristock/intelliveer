import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeOnboardingComponent } from './practice-onboarding.component';

describe('PracticeOnboardingComponent', () => {
  let component: PracticeOnboardingComponent;
  let fixture: ComponentFixture<PracticeOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeOnboardingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
