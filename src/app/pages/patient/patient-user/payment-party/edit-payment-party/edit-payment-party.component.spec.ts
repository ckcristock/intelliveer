import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPaymentPartyComponent } from './edit-payment-party.component';


describe('EditPaymentPartyComponent', () => {
  let component: EditPaymentPartyComponent;
  let fixture: ComponentFixture<EditPaymentPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPaymentPartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPaymentPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
