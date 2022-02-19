import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dailyquiz01Component } from './dailyquiz01.component';

describe('Dailyquiz01Component', () => {
  let component: Dailyquiz01Component;
  let fixture: ComponentFixture<Dailyquiz01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dailyquiz01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dailyquiz01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
