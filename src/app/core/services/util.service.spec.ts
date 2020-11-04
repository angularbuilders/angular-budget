import { UtilService } from './util.service';

fdescribe('The UtilsService', () => {
  beforeEach(() => {});
  it('SHOULD set the correct title', () => {
    // Arrange
    const titleServiceSpy = jasmine.createSpyObj('TitleService', ['setTitle']);
    const setTitleSpy: jasmine.Spy = titleServiceSpy.setTitle;
    const stubTitle = 'Merendar';
    setTitleSpy.and.returnValue(stubTitle);
    const sut = new UtilService(titleServiceSpy);
    // Act
    sut.setDocumentTitle('Merendar');
    const actual = setTitleSpy.calls.mostRecent().returnValue;
    // Assert
    const expected = 'Merendar';
    expect(actual).toEqual(expected);
  });
});

/*
 * Original Angular CLI generated Code
 */

// import { TestBed } from '@angular/core/testing';

// describe('UtilService', () => {
//   let service: UtilService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(UtilService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
