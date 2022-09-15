import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditInsuranceGroupComponent } from './edit-insurance-group.component';


describe('EditInsuranceGroupComponent', () => {
  let component: EditInsuranceGroupComponent;
  let fixture: ComponentFixture<EditInsuranceGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInsuranceGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInsuranceGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
