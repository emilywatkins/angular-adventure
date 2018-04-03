import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage31Component } from './stage3-1.component';

describe('Stage31Component', () => {
  let component: Stage31Component;
  let fixture: ComponentFixture<Stage31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stage31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stage31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
