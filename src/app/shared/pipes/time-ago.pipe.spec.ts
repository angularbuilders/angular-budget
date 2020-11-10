import { TestBed } from '@angular/core/testing';
import { UtilService } from 'src/app/core/services/util.service';
import { TimeAgoPipe } from './time-ago.pipe';

/**
 * 5 - Componentes (o Pipes) con dependencias integradas
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
