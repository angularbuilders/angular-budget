/*
 * Original Angular CLI generated Code
 */
import { TestBed } from '@angular/core/testing';
import { UtilService } from './util.service';

fdescribe('The UtilsService', () => {
  beforeEach(() => {});
  it('SHOULD set the correct title', () => {
    // Arrange
    const titleServiceSpy = jasmine.createSpyObj('TitleService', ['setTitle']);
    const setTitleSpy: jasmine.Spy = titleServiceSpy.setTitle;
    const stubTitle = 'Pruebas unitarias';
    setTitleSpy.and.returnValue(stubTitle);
    const sut = new UtilService(titleServiceSpy);
    // Act
    sut.setDocumentTitle('Pruebas unitarias');
    const actual = setTitleSpy.calls.mostRecent().returnValue;
    // Assert
    const expected = 'Pruebas unitarias';
    expect(actual).toEqual(expected);
  });
});

fdescribe('UtilService', () => {
  let sut: UtilService;

  beforeEach(() => {
    // Arrange
    TestBed.configureTestingModule({});
    // Act
    sut = TestBed.inject(UtilService);
  });

  it('should be created', () => {
    // Assert
    expect(sut).toBeTruthy();
  });

  it('SHOULD allow to call setDocumentTitle', () => {
    const actual = sut.setDocumentTitle('Pruebas unitarias');
    expect(actual).toBe(undefined);
  });
});
