import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPaymentPartyComponent } from './add-payment-party.component';


describe('AddPaymentPartyComponent', () => {
  let component: AddPaymentPartyComponent;
  let fixture: ComponentFixture<AddPaymentPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaymentPartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPaymentPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
