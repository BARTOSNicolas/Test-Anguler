import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleNgClass } from './ng-style-ng-class';

describe('NgStyleNgClass', () => {
  let component: NgStyleNgClass;
  let fixture: ComponentFixture<NgStyleNgClass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgStyleNgClass]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgStyleNgClass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
