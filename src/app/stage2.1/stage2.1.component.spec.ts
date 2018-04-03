import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage2.1Component } from './stage2.1.component';

describe('Stage2.1Component', () => {
  let component: Stage2.1Component;
  let fixture: ComponentFixture<Stage2.1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stage2.1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stage2.1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
