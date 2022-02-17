import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInfoboxComponent } from './header-infobox.component';

describe('HeaderInfoboxComponent', () => {
  let component: HeaderInfoboxComponent;
  let fixture: ComponentFixture<HeaderInfoboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderInfoboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderInfoboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
