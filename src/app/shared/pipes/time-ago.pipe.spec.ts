import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilService } from 'src/app/core/services/util.service';
import { TimeAgoPipe } from './time-ago.pipe';

/**
 * 6 - Pipes con dependencias integradas
 * A veces es lo único que podemos probar...
 */

fdescribe('GIVEN the TimeAgoPipe', () => {
  let timeAgoPipeSUT: TimeAgoPipe;
  beforeEach(() => {
    // Arrange
    TestBed.configureTestingModule({ providers: [UtilService] });
    const utilService = TestBed.inject<UtilService>(UtilService);
    // es una prueba de integración, porque usa el servicio real como colaborador
    timeAgoPipeSUT = new TimeAgoPipe(utilService);
  });
  it('WHEN instantiated SHOULD get an instance', () => {
    // Act
    // implícito
    // Assert
    // el pipe se ha compilado bien
    expect(timeAgoPipeSUT).toBeTruthy();
  });
  it('WHEN called with an ancient date SHOULD generate a long time ago message', () => {
    // Act
    const inputAncientDate = new Date(2000, 1, 1);
    const actual = timeAgoPipeSUT.transform(inputAncientDate);
    // Assert
    const expected = 'hace mucho tiempo';
    // ⚠ dependemos de que el servicio esté bien programado
    expect(actual).toBe(expected);
  });
});

/*
 * 10 - pruebas con un componente dummy
 */

@Component({
  template: `<p>{{ theDate | timeAgo }}</p>`,
})
class DummyComponent {
  theDate = new Date(2020, 0, 1);
}

fdescribe('GIVEN a DummyComponent using the TimeAgo pipe', () => {
  let component: DummyComponent;
  let fixture: ComponentFixture<DummyComponent>;
  let debugEl: DebugElement;
  let nativeEl: HTMLElement;

  beforeEach(async () => {
    // Arrange
    await TestBed.configureTestingModule({
      declarations: [DummyComponent, TimeAgoPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    // Arrange
    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    nativeEl = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('WHEN the date is 01/01/2020 THEN renders hace mucho tiempo ', () => {
    // Act
    const actualNative: HTMLElement = nativeEl.querySelector('p');
    const actual = actualNative.textContent;
    // Assert
    const expected = 'hace mucho tiempo';
    expect(actual).toEqual(expected);
  });
});
