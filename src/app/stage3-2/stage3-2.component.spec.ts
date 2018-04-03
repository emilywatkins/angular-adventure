import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage32Component } from './stage3-2.component';

describe('Stage32Component', () => {
  let component: Stage32Component;
  let fixture: ComponentFixture<Stage32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stage32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stage32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
