/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagesNavComponent } from './pages-nav.component';

describe('PagesNavComponent', () => {
  let component: PagesNavComponent;
  let fixture: ComponentFixture<PagesNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
