import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Category6Component } from './category_6.component';

describe('Category6Component', () => {
  let component: Category6Component;
  let fixture: ComponentFixture<Category6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Category6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Category6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
