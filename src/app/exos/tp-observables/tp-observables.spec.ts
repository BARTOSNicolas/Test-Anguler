import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpObservables } from './tp-observables';

describe('TpObservables', () => {
  let component: TpObservables;
  let fixture: ComponentFixture<TpObservables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpObservables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpObservables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
