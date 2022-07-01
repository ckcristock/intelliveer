import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoleTemplateComponent } from './add-role-template.component';

describe('AddRolTemplateComponent', () => {
  let component: AddRoleTemplateComponent;
  let fixture: ComponentFixture<AddRoleTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRoleTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoleTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
