import { AboutPageComponent } from './about.component';

/**
 * 4 - Componentes simples
 * Empezamos probando como clases normales
 */

fdescribe('GIVEN: the AboutComponent', () => {
  beforeEach(() => {});
  it('WHEN Ask for title THEN equals Angular Budget', () => {
    // Arrange
    const sut = new AboutPageComponent();
    // Act
    const actual = sut.title;
    // Assert
    const expected = 'Angular Budget';
    expect(actual).toEqual(expected);
  });
});
