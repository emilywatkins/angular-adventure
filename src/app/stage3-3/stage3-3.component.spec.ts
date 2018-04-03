import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage33Component } from './stage3-3.component';

describe('Stage33Component', () => {
  let component: Stage33Component;
  let fixture: ComponentFixture<Stage33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stage33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stage33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
