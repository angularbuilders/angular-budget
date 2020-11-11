import { Title } from '@angular/platform-browser';
import { UtilService } from './util.service';

/**
 * 3 - Colaboradores - unitarias
 * Usamos dobles para los colaboradores
 * Concretamente Spies para probar su comportamiento
 */

fdescribe('GIVEN the UtilsService', () => {
  // UtilService es el Subject Under Test
  let utilServiceSUT: UtilService;
  // TitleService es un colaborador (una dependencia)
  let titleServiceSpy: jasmine.SpyObj<Title>;
  beforeEach(() => {
    // Arrange
    // El colaborador es un doble
    titleServiceSpy = jasmine.createSpyObj('TitleService', {
      // Método y respuesta predefinida para void
      setTitle: undefined,
    });
    utilServiceSUT = new UtilService(titleServiceSpy);
  });
  it('WHEN setting a title SHOULD send that title to Angular Service', () => {
    // Act
    utilServiceSUT.setDocumentTitle('Pruebas unitarias');
    // Assert
    // Prueba de comportamiento testeando el envío a un colaborador
    // Espiamos para saber el uso que se hace del colaborador
    const actual = titleServiceSpy.setTitle.calls.mostRecent().args[0];
    const expected = 'Pruebas unitarias | Angular.Budget';
    expect(actual).toEqual(expected);
  });
});
