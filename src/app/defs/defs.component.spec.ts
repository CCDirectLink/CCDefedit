import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefsComponent } from './defs.component';

describe('DefsComponent', () => {
  let component: DefsComponent;
  let fixture: ComponentFixture<DefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
