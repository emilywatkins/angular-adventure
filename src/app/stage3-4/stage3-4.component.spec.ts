import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage34Component } from './stage3-4.component';

describe('Stage34Component', () => {
  let component: Stage34Component;
  let fixture: ComponentFixture<Stage34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stage34Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stage34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
