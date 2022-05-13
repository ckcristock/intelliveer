import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceSubscriberComponent } from './insurance-subscriber.component';

describe('InsuranceSubscriberComponent', () => {
  let component: InsuranceSubscriberComponent;
  let fixture: ComponentFixture<InsuranceSubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceSubscriberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
