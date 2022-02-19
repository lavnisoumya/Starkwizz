import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EighthscreenComponent } from './eighthscreen.component';

describe('EighthscreenComponent', () => {
  let component: EighthscreenComponent;
  let fixture: ComponentFixture<EighthscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EighthscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EighthscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
