import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootChildOneChildOneComponent } from './root-child-one-child-one.component';

describe('RootChildOneChildOneComponent', () => {
  let component: RootChildOneChildOneComponent;
  let fixture: ComponentFixture<RootChildOneChildOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootChildOneChildOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootChildOneChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
