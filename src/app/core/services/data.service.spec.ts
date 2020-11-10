import { of } from 'rxjs';
import { DataService } from './data.service';

fdescribe('GIVEN: A dataService', () => {
  let httpClientSpy: any;
  let getSpy: jasmine.Spy;
  beforeEach(() => {
    // Arrange
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    getSpy = httpClientSpy.get;
    const inputProjects = [{ id: 'ok', title: 'ok' }];
    getSpy.and.returnValue(of(inputProjects));
  });
  it('WHEN call the getProjects THEN the url is the expected', () => {
    // Act
    const sut = new DataService(httpClientSpy);
    sut.getProjects$().subscribe();
    // Assert
    const actual = getSpy.calls.mostRecent().args[0];
    const expected = 'https://api-base.herokuapp.com/api/pub/projects';
    expect(actual).toEqual(expected);
  });
  it('WHEN call the getProjects THEN returns an observable of a projects list', () => {
    // Act
    const sut = new DataService(httpClientSpy);
    let actual = null;
    sut.getProjects$().subscribe({
      next: data => (actual = data),
    });
    // Assert
    const expected = [{ id: 'ok', title: 'ok' }];
    expect(actual).toEqual(expected);
  });
});

/**
 * Original Angular CLI generated Code
 */

// import { TestBed } from '@angular/core/testing';

// describe('DataService', () => {
//   let service: DataService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(DataService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
