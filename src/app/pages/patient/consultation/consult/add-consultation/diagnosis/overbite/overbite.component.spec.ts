import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverbiteComponent } from './overbite.component';

describe('OverbiteComponent', () => {
  let component: OverbiteComponent;
  let fixture: ComponentFixture<OverbiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverbiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverbiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
