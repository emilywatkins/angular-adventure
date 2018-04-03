import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage2.2Component } from './stage2.2.component';

describe('Stage2.2Component', () => {
  let component: Stage2.2Component;
  let fixture: ComponentFixture<Stage2.2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stage2.2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stage2.2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
