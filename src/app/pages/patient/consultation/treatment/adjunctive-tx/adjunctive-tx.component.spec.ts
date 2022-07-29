import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjunctiveTxComponent } from './adjunctive-tx.component';

describe('AdjunctiveTxComponent', () => {
  let component: AdjunctiveTxComponent;
  let fixture: ComponentFixture<AdjunctiveTxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdjunctiveTxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjunctiveTxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
