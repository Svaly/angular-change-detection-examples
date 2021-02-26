import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootChildOneComponent } from './root-child-one.component';

describe('RootChildOneComponent', () => {
  let component: RootChildOneComponent;
  let fixture: ComponentFixture<RootChildOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootChildOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
