import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentscreenComponent } from './parentscreen.component';

describe('ParentscreenComponent', () => {
  let component: ParentscreenComponent;
  let fixture: ComponentFixture<ParentscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
