import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalocclusionComponent } from './malocclusion.component';

describe('MalocclusionComponent', () => {
  let component: MalocclusionComponent;
  let fixture: ComponentFixture<MalocclusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalocclusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MalocclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
