import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompNotFoundComponent } from './comp-not-found.component';

describe('CompNotFoundComponent', () => {
  let component: CompNotFoundComponent;
  let fixture: ComponentFixture<CompNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
