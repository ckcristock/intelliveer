import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditInsuranceSubscriberComponent } from './edit-insurance-subscriber.component';


describe('EditInsuranceSubscriberComponent', () => {
  let component: EditInsuranceSubscriberComponent;
  let fixture: ComponentFixture<EditInsuranceSubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInsuranceSubscriberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInsuranceSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
