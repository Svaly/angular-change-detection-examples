import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootChildTwoComponent } from './root-child-two.component';

describe('RootChildTwoComponent', () => {
  let component: RootChildTwoComponent;
  let fixture: ComponentFixture<RootChildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootChildTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
