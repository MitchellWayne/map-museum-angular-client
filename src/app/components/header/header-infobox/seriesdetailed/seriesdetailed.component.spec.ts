import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesdetailedComponent } from './seriesdetailed.component';

describe('SeriesdetailedComponent', () => {
  let component: SeriesdetailedComponent;
  let fixture: ComponentFixture<SeriesdetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesdetailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesdetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
