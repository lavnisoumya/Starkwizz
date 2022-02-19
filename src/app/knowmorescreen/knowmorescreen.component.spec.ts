import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowmorescreenComponent } from './knowmorescreen.component';

describe('KnowmorescreenComponent', () => {
  let component: KnowmorescreenComponent;
  let fixture: ComponentFixture<KnowmorescreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowmorescreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowmorescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
