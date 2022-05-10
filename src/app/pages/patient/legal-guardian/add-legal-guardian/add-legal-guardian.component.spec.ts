import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLegalGuardianComponent } from './add-legal-guardian.component';

describe('AddLegalGuardianComponent', () => {
  let component: AddLegalGuardianComponent;
  let fixture: ComponentFixture<AddLegalGuardianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLegalGuardianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLegalGuardianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
