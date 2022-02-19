import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthscreenComponent } from './sixthscreen.component';

describe('SixthscreenComponent', () => {
  let component: SixthscreenComponent;
  let fixture: ComponentFixture<SixthscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixthscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
