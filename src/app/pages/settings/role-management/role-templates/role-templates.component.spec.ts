import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleTemplatesComponent } from './role-templates.component';

describe('RoleTemplatesComponent', () => {
  let component: RoleTemplatesComponent;
  let fixture: ComponentFixture<RoleTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleTemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
