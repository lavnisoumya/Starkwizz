import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthscreenComponent } from './fourthscreen.component';

describe('FourthscreenComponent', () => {
  let component: FourthscreenComponent;
  let fixture: ComponentFixture<FourthscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
