import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddInsuranceGroupComponent } from './add-insurance-group.component';


describe('AddInsuranceGroupComponent', () => {
  let component: AddInsuranceGroupComponent;
  let fixture: ComponentFixture<AddInsuranceGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInsuranceGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInsuranceGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
