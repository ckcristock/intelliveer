import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddRefererComponent } from './add-referer.component';


describe('AddRefererComponent', () => {
  let component: AddRefererComponent;
  let fixture: ComponentFixture<AddRefererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRefererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRefererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
