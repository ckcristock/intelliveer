import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferrerFormComponent } from './referrer-form.component';

describe('ReferrerFormComponent', () => {
  let component: ReferrerFormComponent;
  let fixture: ComponentFixture<ReferrerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferrerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferrerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
