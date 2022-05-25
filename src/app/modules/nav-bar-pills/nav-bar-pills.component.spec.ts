import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarPillsComponent } from './nav-bar-pills.component';

describe('NavBarPillsComponent', () => {
  let component: NavBarPillsComponent;
  let fixture: ComponentFixture<NavBarPillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarPillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarPillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
