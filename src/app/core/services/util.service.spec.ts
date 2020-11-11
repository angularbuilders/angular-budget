import { UtilService } from './util.service';

fdescribe('GIVEN the UtilsService', () => {
  let utilServiceSUT: UtilService;
  beforeEach(() => {
    // Arrange
    utilServiceSUT = new UtilService();
  });
  it('WHEN called with an ancient date THEN should generate a long time ago message', () => {
    // Act
    const actual = utilServiceSUT.getFechaColoquial(new Date(2001, 1, 1));
    // Assert
    const expected = 'hace mucho tiempo';
    expect(actual).toEqual(expected);
  });
  it('WHEN slugifies spaces and dots THEN converts them to hyphens', () => {
    // Act
    const actual = utilServiceSUT.slugify('Web testing Angular 10.1');
    // Assert
    const expected = 'web-testing-angular-10-1';
    expect(actual).toEqual(expected);
  });
  it('WHEN slugifies Spanish chars THEN converts them to hyphens', () => {
    // Act
    const actual = utilServiceSUT.slugify('Más Angular en español');
    // Assert
    const expected = 'm-s-angular-en-espa-ol';
    expect(actual).toEqual(expected);
  });
});
