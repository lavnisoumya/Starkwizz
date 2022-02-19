import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiktokscreenComponent } from './tiktokscreen.component';

describe('TiktokscreenComponent', () => {
  let component: TiktokscreenComponent;
  let fixture: ComponentFixture<TiktokscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiktokscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiktokscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
