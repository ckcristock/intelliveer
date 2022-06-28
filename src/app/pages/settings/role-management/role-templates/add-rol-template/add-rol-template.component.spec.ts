import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRolTemplateComponent } from './add-rol-template.component';

describe('AddRolTemplateComponent', () => {
  let component: AddRolTemplateComponent;
  let fixture: ComponentFixture<AddRolTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRolTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRolTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
