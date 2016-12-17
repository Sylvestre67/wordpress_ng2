/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { XsNavComponent } from './xs-nav.component';

describe('XsNavComponent', () => {
  let component: XsNavComponent;
  let fixture: ComponentFixture<XsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
