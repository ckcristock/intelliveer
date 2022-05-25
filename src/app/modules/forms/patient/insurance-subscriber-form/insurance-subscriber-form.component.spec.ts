import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsuranceSubscriberFormComponent } from './insurance-subscriber-form.component';


describe('InsuranceSubscriberFormComponent', () => {
  let component: InsuranceSubscriberFormComponent;
  let fixture: ComponentFixture<InsuranceSubscriberFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceSubscriberFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceSubscriberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
