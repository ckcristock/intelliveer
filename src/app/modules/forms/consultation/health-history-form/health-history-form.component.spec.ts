import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HealthHistoryFormComponent } from './health-history-form.component';


describe('HealthHistoryFormComponent', () => {
  let component: HealthHistoryFormComponent;
  let fixture: ComponentFixture<HealthHistoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthHistoryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthHistoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
