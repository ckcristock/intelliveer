import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoorWithProspectComponent } from './coor-with-prospect.component';

describe('CoorWithProspectComponent', () => {
  let component: CoorWithProspectComponent;
  let fixture: ComponentFixture<CoorWithProspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoorWithProspectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoorWithProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
