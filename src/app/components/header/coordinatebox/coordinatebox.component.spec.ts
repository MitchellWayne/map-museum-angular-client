import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateboxComponent } from './coordinatebox.component';

describe('CoordinateboxComponent', () => {
  let component: CoordinateboxComponent;
  let fixture: ComponentFixture<CoordinateboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinateboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
