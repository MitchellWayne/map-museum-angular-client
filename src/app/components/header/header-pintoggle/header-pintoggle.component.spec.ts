import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPintoggleComponent } from './header-pintoggle.component';

describe('HeaderPintoggleComponent', () => {
  let component: HeaderPintoggleComponent;
  let fixture: ComponentFixture<HeaderPintoggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPintoggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPintoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
