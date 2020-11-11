import { AboutComponent } from './about.component';

/**
 * 2 - Componentes simples
 * Empezamos probando como clases normales
 */

fdescribe('GIVEN: the AboutComponent', () => {
  let sut: AboutComponent;
  beforeEach(() => {
    // Arrange
    sut = new AboutComponent();
  });
  it('WHEN ask for title THEN equals Angular Budget', () => {
    // Act
    const actual = sut.title;
    // Assert
    const expected = 'Angular Budget';
    expect(actual).toEqual(expected);
  });
});
