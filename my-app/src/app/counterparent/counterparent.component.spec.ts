import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterparentComponent } from './counterparent.component';

describe('CounterparentComponent', () => {
  let component: CounterparentComponent;
  let fixture: ComponentFixture<CounterparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
