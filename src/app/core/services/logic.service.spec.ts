import { LogicService } from './logic.service';

/**
 * GIVEN: the slugify method
 * WHEN: slugify Angular 10.1
 * THEN: returns angular-10-1
 */
fdescribe('GIVEN: the slugify method', () => {
  beforeEach(() => {});
  it('WHEN receives Angular 10.1 THEN returns angular-10-1', () => {
    const sut = new LogicService();
    const actual = sut.slugify('Angular 10.1');
    const expected = 'angular-10-1';
    expect(actual).toEqual(expected);
  });
});

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
 * The slugify method
 * SHOULD sanitize spaces and dots
 * SHOULD sanitize spanish chars
 */
fdescribe('The slugify method', () => {
  let sut: LogicService;
  beforeAll(() => {
    sut = new LogicService();
  });
  it('SHOULD sanitize spaces and dots', () => {
    const actual = sut.slugify('Web testing Angular 10.1');
    const expected = 'web-testing-angular-10-1';
    expect(actual).toEqual(expected);
  });
  it('SHOULD sanitize spanish chars', () => {
    const actual = sut.slugify('Angular en español');
    const expected = 'angular-en-espa-ol';
    expect(actual).toEqual(expected);
  });
});

/**
 * Original Angular CLI generated Code
 */

// import { TestBed } from '@angular/core/testing';

// describe('LogicService', () => {
//   let service: LogicService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(LogicService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
