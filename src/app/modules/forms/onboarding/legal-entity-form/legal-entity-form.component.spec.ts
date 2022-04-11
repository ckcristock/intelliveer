import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalEntityFormComponent } from './legal-entity-form.component';

describe('LegalEntityFormComponent', () => {
  let component: LegalEntityFormComponent;
  let fixture: ComponentFixture<LegalEntityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalEntityFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalEntityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
