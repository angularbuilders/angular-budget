import { of } from 'rxjs';
import { HttpAdapterService } from './adapters/http-adapter.service';
import { DataService } from './data.service';

fdescribe('GIVEN: the DataService', () => {
  let sut: DataService;
  let httpAdapterSpy: jasmine.SpyObj<HttpAdapterService>;

  beforeEach(() => {
    // Arrange
    httpAdapterSpy = jasmine.createSpyObj('HttpClient', {
      get: of([{ id: 'ok', title: 'ok' }]),
    });
    sut = new DataService(httpAdapterSpy);
  });
  it('WHEN call the getProjects THEN the url is the expected', () => {
    // Act
    sut.getProjects$().subscribe();
    // Assert
    const actual = httpAdapterSpy.get.calls.mostRecent().args[0];
    const expected = 'https://api-base.herokuapp.com/api/pub/projects';
    expect(actual).toEqual(expected);
  });
  it('WHEN call the getProjects THEN returns an observable of a projects list', () => {
    // Act
    let actual: any[];
    sut.getProjects$().subscribe({
      next: data => (actual = data),
    });
    // Assert
    const expected = [{ id: 'ok', title: 'ok' }];
    expect(actual).toEqual(expected);
  });
});
