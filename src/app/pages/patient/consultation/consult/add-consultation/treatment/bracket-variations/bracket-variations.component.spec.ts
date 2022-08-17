import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketVariationsComponent } from './bracket-variations.component';

describe('BracketVariationsComponent', () => {
  let component: BracketVariationsComponent;
  let fixture: ComponentFixture<BracketVariationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BracketVariationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketVariationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
