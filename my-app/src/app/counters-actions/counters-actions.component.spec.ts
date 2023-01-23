import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountersActionsComponent } from './counters-actions.component';

describe('CountersActionsComponent', () => {
  let component: CountersActionsComponent;
  let fixture: ComponentFixture<CountersActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountersActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountersActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
