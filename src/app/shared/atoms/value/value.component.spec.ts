import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValueComponent } from './value.component';

/**
 * 9 - input renders
 * paso de datos
 * control de renderizado
 */

fdescribe('GIVEN the ValueComponent', () => {
  let component: ValueComponent;
  let fixture: ComponentFixture<ValueComponent>;
  let debugEl: DebugElement;
  let nativeEl: HTMLElement;

  beforeEach(async () => {
    // Arrange
    await TestBed.configureTestingModule({
      declarations: [ValueComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    // Arrange
    fixture = TestBed.createComponent(ValueComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    nativeEl = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('WHEN there is no input value THEN it renders an empty string', () => {
    // Act
    // Assert
    const actualNative: HTMLElement = nativeEl.querySelector('b');
    const actual = actualNative.textContent;
    const expected = '';
    expect(actual).toEqual(expected);
  });

  it('WHEN the input value is 42 THEN it renders a string 42', () => {
    // Act
    component.value = String(42);
    fixture.detectChanges();
    // Assert
    const actualNative: HTMLElement = nativeEl.querySelector('b');
    const actual = actualNative.textContent;
    const expected = '42';
    expect(actual).toEqual(expected);
  });

  it('WHEN the input isOK is true THEN it renders with css class ok ', () => {
    // Act
    component.isOk = true;
    fixture.detectChanges();
    // Assert
    const actualNative: HTMLElement = nativeEl.querySelector('dd');
    const actual = actualNative.classList.contains('ok');
    const expected = true;
    expect(actual).toEqual(expected);
  });
  it('WHEN the input isOK is false THEN it renders with css class ko ', () => {
    // Act
    component.isOk = false;
    fixture.detectChanges();
    // Assert
    const actualNative: HTMLElement = nativeEl.querySelector('dd');
    const actual = actualNative.classList.contains('ko');
    const expected = true;
    expect(actual).toEqual(expected);
  });
});
