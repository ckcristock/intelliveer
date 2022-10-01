import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentsAndAgreementComponent } from './consents-and-agreement.component';

describe('ConsentsAndAgreementComponent', () => {
  let component: ConsentsAndAgreementComponent;
  let fixture: ComponentFixture<ConsentsAndAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsentsAndAgreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentsAndAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
