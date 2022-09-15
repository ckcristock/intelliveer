import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeToolComponent } from './practice-tool.component';

describe('PracticeToolComponent', () => {
  let component: PracticeToolComponent;
  let fixture: ComponentFixture<PracticeToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
