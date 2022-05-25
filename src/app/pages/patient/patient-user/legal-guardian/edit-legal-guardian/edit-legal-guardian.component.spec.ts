import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLegalGuardianComponent } from './edit-legal-guardian.component';

describe('EditLegalGuardianComponent', () => {
  let component: EditLegalGuardianComponent;
  let fixture: ComponentFixture<EditLegalGuardianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLegalGuardianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLegalGuardianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
