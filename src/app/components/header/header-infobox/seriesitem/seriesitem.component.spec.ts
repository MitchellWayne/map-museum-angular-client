import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesitemComponent } from './seriesitem.component';

describe('SeriesitemComponent', () => {
  let component: SeriesitemComponent;
  let fixture: ComponentFixture<SeriesitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
