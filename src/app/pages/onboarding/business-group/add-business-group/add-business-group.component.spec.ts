import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusinessGroupComponent } from './add-business-group.component';

describe('AddBusinessGroupComponent', () => {
  let component: AddBusinessGroupComponent;
  let fixture: ComponentFixture<AddBusinessGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBusinessGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBusinessGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
