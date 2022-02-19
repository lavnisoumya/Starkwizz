import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyquizComponent } from './dailyquiz.component';

describe('DailyquizComponent', () => {
  let component: DailyquizComponent;
  let fixture: ComponentFixture<DailyquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
