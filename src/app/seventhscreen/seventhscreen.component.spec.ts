import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhscreenComponent } from './seventhscreen.component';

describe('SeventhscreenComponent', () => {
  let component: SeventhscreenComponent;
  let fixture: ComponentFixture<SeventhscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeventhscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventhscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
