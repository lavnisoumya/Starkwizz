import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivescreenComponent } from './fivescreen.component';

describe('FivescreenComponent', () => {
  let component: FivescreenComponent;
  let fixture: ComponentFixture<FivescreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FivescreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FivescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
