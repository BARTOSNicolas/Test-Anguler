import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpSignals } from './tp-signals';

describe('TpSignals', () => {
  let component: TpSignals;
  let fixture: ComponentFixture<TpSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpSignals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpSignals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
