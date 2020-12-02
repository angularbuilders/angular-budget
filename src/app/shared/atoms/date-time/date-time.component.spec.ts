import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateTimeComponent } from './date-time.component';

@Component({
  template: `<ab-date-time [date]="theDate"></ab-date-time>`,
})
class DummyComponent {
  theDate: Date;
}

fdescribe('DateTimeComponent', () => {
  let component: DateTimeComponent;
  let fixture: ComponentFixture<DateTimeComponent>;
  let dummyFixture: ComponentFixture<DummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateTimeComponent, DummyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimeComponent);
    dummyFixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('WHEN: the input date is the New York WTC crash, THEN: it renders 11/09/2001', () => {
    // Act
    component.date = new Date(2001, 8, 11);
    fixture.detectChanges();
    // Assert
    const actual = fixture.nativeElement.querySelector('time').textContent;
    const expected = '11/09/2001';
    expect(actual).toEqual(expected);
  });
  it('WHEN: the input date is the New York WTC crash 2, THEN: it renders 11/09/2001', () => {
    // Act
    dummyFixture.componentInstance.theDate = new Date(2001, 8, 11);
    dummyFixture.detectChanges();
    // Assert
    const actual = dummyFixture.nativeElement.querySelector('time').textContent;
    const expected = '11/09/2001';
    expect(actual).toEqual(expected);
  });
});

// GIVEN: the DateTimeComponent
// WHEN: the input date is the New York WTC crash,
// THEN: it renders 11/09/2001
