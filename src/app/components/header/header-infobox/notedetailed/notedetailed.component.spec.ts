import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotedetailedComponent } from './notedetailed.component';

describe('NotedetailedComponent', () => {
  let component: NotedetailedComponent;
  let fixture: ComponentFixture<NotedetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotedetailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotedetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
