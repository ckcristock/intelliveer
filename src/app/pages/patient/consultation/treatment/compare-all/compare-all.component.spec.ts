import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareAllComponent } from './compare-all.component';

describe('CompareAllComponent', () => {
  let component: CompareAllComponent;
  let fixture: ComponentFixture<CompareAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
