import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessGroupFormComponent } from './business-group-form.component';

describe('BusinessGroupFormComponent', () => {
  let component: BusinessGroupFormComponent;
  let fixture: ComponentFixture<BusinessGroupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessGroupFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
