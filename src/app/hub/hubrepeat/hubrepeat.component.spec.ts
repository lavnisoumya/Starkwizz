import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubrepeatComponent } from './hubrepeat.component';

describe('HubrepeatComponent', () => {
  let component: HubrepeatComponent;
  let fixture: ComponentFixture<HubrepeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HubrepeatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HubrepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
