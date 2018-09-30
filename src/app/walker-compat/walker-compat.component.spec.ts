import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkerCompatComponent } from './walker-compat.component';

describe('WalkerCompatComponent', () => {
  let component: WalkerCompatComponent;
  let fixture: ComponentFixture<WalkerCompatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkerCompatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkerCompatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
