import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootChildTwoChildTwoComponent } from './root-child-two-child-two.component';

describe('RootChildTwoChildTwoComponent', () => {
  let component: RootChildTwoChildTwoComponent;
  let fixture: ComponentFixture<RootChildTwoChildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootChildTwoChildTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootChildTwoChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
