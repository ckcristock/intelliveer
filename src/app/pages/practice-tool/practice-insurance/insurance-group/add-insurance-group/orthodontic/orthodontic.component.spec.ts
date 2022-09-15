import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthodonticComponent } from './orthodontic.component';

describe('OrthodonticComponent', () => {
  let component: OrthodonticComponent;
  let fixture: ComponentFixture<OrthodonticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrthodonticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthodonticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
