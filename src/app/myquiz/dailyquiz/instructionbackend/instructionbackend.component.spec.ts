import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionbackendComponent } from './instructionbackend.component';

describe('InstructionbackendComponent', () => {
  let component: InstructionbackendComponent;
  let fixture: ComponentFixture<InstructionbackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructionbackendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionbackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
