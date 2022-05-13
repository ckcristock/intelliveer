import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditRefererComponent } from './edit-referer.component';


describe('EditRefererComponent', () => {
  let component: EditRefererComponent;
  let fixture: ComponentFixture<EditRefererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRefererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRefererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
