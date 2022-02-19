import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupunComponent } from './coupun.component';

describe('CoupunComponent', () => {
  let component: CoupunComponent;
  let fixture: ComponentFixture<CoupunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoupunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
