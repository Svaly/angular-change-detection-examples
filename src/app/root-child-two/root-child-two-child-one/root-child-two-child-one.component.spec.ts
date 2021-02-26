import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootChildTwoChildOneComponent } from './root-child-two-child-one.component';

describe('RootChildTwoChildOneComponent', () => {
  let component: RootChildTwoChildOneComponent;
  let fixture: ComponentFixture<RootChildTwoChildOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootChildTwoChildOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootChildTwoChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
