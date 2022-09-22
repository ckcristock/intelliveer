import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareOptionComponent } from './compare-option.component';

describe('CompareOptionComponent', () => {
  let component: CompareOptionComponent;
  let fixture: ComponentFixture<CompareOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
