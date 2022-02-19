import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookfestComponent } from './bookfest.component';

describe('BookfestComponent', () => {
  let component: BookfestComponent;
  let fixture: ComponentFixture<BookfestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookfestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookfestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
