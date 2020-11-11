import { TitleAdapterService } from './title-adapter.service';
import { TitleService } from './title.service';

fdescribe('GIVEN the UtilsService', () => {
  let titleServiceSUT: TitleService;
  let titleAdapterServiceSpy: jasmine.SpyObj<TitleAdapterService>;
  beforeEach(() => {
    // Arrange
    titleAdapterServiceSpy = jasmine.createSpyObj('TitleService', {
      setDocumentTitle: undefined,
    });
    titleServiceSUT = new TitleService(titleAdapterServiceSpy);
  });
  it('WHEN setting a title SHOULD send that title to Angular Service', () => {
    // Act
    titleServiceSUT.setDocumentTitle('Pruebas unitarias');
    // Assert
    const actual = titleAdapterServiceSpy.setDocumentTitle.calls.mostRecent().args[0];
    const expected = 'Pruebas unitarias | Angular.Budget';
    expect(actual).toEqual(expected);
  });
});
