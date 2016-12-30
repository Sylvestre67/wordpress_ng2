/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DonateFormComponent } from './donate-form.component';

describe('DonateFormComponent', () => {
  let component: DonateFormComponent;
  let fixture: ComponentFixture<DonateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
