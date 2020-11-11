import { LogicService } from './logic.service';

/**
 * 1 - Pruebas SIN Angular
 * GWT Given When Then
 * AAA Arrange Act Assert
 * describe before it
 */

/**
 * The slugify method
 * SHOULD return a web safe text
 */
fdescribe('The slugify method', () => {
  beforeEach(() => {});
  it('SHOULD return a web safe text', () => {
    const sut = new LogicService();
    const actual = sut.slugify('Angular 10.1');
    const expected = 'angular-10-1';
    expect(actual).toEqual(expected);
  });
});

/**
 * GIVEN: the LogicService
 * WHEN: slugifies Angular 10.1
 * THEN: returns angular-10-1
 */
fdescribe('GIVEN: the LogicService', () => {
  let sut: LogicService;
  beforeEach(() => {
    // Arrange
    sut = new LogicService();
  });
  it('WHEN slugifies Angular 10.1 THEN returns angular-10-1', () => {
    // Act
    const actual = sut.slugify('Angular 10.1');
    // Assert
    const expected = 'angular-10-1';
    expect(actual).toEqual(expected);
  });
});

/**
 * Múltiples pruebas
 */
fdescribe('GIVEN: the LogicService', () => {
  let sut: LogicService;
  beforeEach(() => {
    // Arrange
    sut = new LogicService();
  });
  it('WHEN slugifies spaces and dots THEN converts them to hyphens', () => {
    // Act
    const actual = sut.slugify('Web testing Angular 10.1');
    // Assert
    const expected = 'web-testing-angular-10-1';
    expect(actual).toEqual(expected);
  });
  it('WHEN slugifies spanish chars THEN converts them to hyphens', () => {
    // Act
    const actual = sut.slugify('Más Angular en español');
    // Assert
    const expected = 'm-s-angular-en-espa-ol';
    expect(actual).toEqual(expected);
  });
});
