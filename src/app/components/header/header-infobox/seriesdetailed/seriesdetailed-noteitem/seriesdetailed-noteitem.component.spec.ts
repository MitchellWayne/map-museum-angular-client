import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesdetailedNoteitemComponent } from './seriesdetailed-noteitem.component';

describe('SeriesdetailedNoteitemComponent', () => {
  let component: SeriesdetailedNoteitemComponent;
  let fixture: ComponentFixture<SeriesdetailedNoteitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesdetailedNoteitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesdetailedNoteitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
