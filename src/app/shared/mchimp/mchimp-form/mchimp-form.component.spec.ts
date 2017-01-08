/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MchimpFormComponent } from './mchimp-form.component';

describe('MchimpFormComponent', () => {
  let component: MchimpFormComponent;
  let fixture: ComponentFixture<MchimpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MchimpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MchimpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
