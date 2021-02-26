import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootChildOneChildTwoComponent } from './root-child-one-child-two.component';

describe('RootChildOneChildTwoComponent', () => {
  let component: RootChildOneChildTwoComponent;
  let fixture: ComponentFixture<RootChildOneChildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootChildOneChildTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootChildOneChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
