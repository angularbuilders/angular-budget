import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoHomeComponent } from './go-home.component';

describe('GoHomeComponent', () => {
  let component: GoHomeComponent;
  let fixture: ComponentFixture<GoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
