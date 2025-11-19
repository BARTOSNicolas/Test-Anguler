import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpCommunication } from './tp-communication';

describe('TpCommunication', () => {
  let component: TpCommunication;
  let fixture: ComponentFixture<TpCommunication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpCommunication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpCommunication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
