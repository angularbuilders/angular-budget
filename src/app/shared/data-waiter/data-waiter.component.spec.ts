import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataWaiterComponent } from './data-waiter.component';

describe('DataWaiterComponent', () => {
  let component: DataWaiterComponent;
  let fixture: ComponentFixture<DataWaiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataWaiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataWaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
