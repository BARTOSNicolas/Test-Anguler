import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveUser } from './active-user';

describe('ActiveUser', () => {
  let component: ActiveUser;
  let fixture: ComponentFixture<ActiveUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
