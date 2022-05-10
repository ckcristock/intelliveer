import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentPartyFormComponent } from './payment-party-form.component';


describe('PaymentPartyFormComponent', () => {
  let component: PaymentPartyFormComponent;
  let fixture: ComponentFixture<PaymentPartyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentPartyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPartyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
