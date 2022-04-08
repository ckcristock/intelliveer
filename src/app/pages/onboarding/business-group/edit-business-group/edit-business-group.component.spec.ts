import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBusinessGroupComponent } from './edit-business-group.component';

describe('EditBusinessGroupComponent', () => {
  let component: EditBusinessGroupComponent;
  let fixture: ComponentFixture<EditBusinessGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBusinessGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBusinessGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
