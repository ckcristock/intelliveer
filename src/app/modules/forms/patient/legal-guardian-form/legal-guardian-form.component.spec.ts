import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LegalGuardianFormComponent } from './legal-guardian-form.component';


describe('LegalGuardianFormComponent', () => {
  let component: LegalGuardianFormComponent;
  let fixture: ComponentFixture<LegalGuardianFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalGuardianFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalGuardianFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
