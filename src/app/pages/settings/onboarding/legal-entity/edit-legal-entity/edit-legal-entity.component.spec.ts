import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLegalEntityComponent } from './edit-legal-entity.component';

describe('EditLegalEntityComponent', () => {
  let component: EditLegalEntityComponent;
  let fixture: ComponentFixture<EditLegalEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLegalEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLegalEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
