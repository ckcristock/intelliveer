import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverjetComponent } from '../overjet/overjet.component';

describe('OverjetComponent', () => {
  let component: OverjetComponent;
  let fixture: ComponentFixture<OverjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
