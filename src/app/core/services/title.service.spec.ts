import { TitleAdapterService } from './adapters/title-adapter.service';
import { TitleService } from './title.service';

/**
 * 3 - Colaboradores - unitarias
 * Usamos dobles para los colaboradores
 * Concretamente Spies para probar su comportamiento
 */

fdescribe('GIVEN the TitleService', () => {
  // TitleService es el Subject Under Test
  let titleServiceSUT: TitleService;
  // TitleAdapterService es un colaborador (una dependencia)
  let titleAdapterServiceSpy: jasmine.SpyObj<TitleAdapterService>;
  beforeEach(() => {
    // Arrange
    // El colaborador es un doble
    titleAdapterServiceSpy = jasmine.createSpyObj('TitleService', {
      // Método y respuesta predefinida para void
      setDocumentTitle: undefined,
    });
    titleServiceSUT = new TitleService(titleAdapterServiceSpy);
  });
  it('WHEN setting a title SHOULD send that title to the Adapter', () => {
    // Act
    titleServiceSUT.setDocumentTitle('Pruebas unitarias');
    // Assert
    // Prueba de comportamiento testeando el envío a un colaborador
    // Espiamos para saber el uso que se hace del colaborador
    const actual = titleAdapterServiceSpy.setDocumentTitle.calls.mostRecent().args[0];
    const expected = 'Pruebas unitarias | Angular.Budget';
    expect(actual).toEqual(expected);
  });
});
