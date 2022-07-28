import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToothchartComponent } from './toothchart.component';

describe('ToothchartComponent', () => {
  let component: ToothchartComponent;
  let fixture: ComponentFixture<ToothchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToothchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToothchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
