import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthodonticFormComponent } from './orthodontic-form.component';

describe('OrthodonticFormComponent', () => {
  let component: OrthodonticFormComponent;
  let fixture: ComponentFixture<OrthodonticFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrthodonticFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthodonticFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
