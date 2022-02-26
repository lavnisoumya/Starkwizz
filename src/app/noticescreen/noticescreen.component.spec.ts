import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticescreenComponent } from './noticescreen.component';

describe('NoticescreenComponent', () => {
  let component: NoticescreenComponent;
  let fixture: ComponentFixture<NoticescreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticescreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
