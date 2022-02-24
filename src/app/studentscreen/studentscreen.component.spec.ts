import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentscreenComponent } from './studentscreen.component';

describe('StudentscreenComponent', () => {
  let component: StudentscreenComponent;
  let fixture: ComponentFixture<StudentscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
