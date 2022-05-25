import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthoBenefComponent } from './ortho-benef.component';

describe('OrthoBenefComponent', () => {
  let component: OrthoBenefComponent;
  let fixture: ComponentFixture<OrthoBenefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrthoBenefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthoBenefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
