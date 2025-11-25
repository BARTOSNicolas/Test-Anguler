import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesAdvanced } from './observables-advanced';

describe('ObservablesAdvanced', () => {
  let component: ObservablesAdvanced;
  let fixture: ComponentFixture<ObservablesAdvanced>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservablesAdvanced]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablesAdvanced);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
