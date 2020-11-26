import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { DataService } from './data.service';

/**
 * 4 - Colaboradores - asíncronos
 * Usamos dobles y retornamos observables
 * Suscripción a la respuesta y comprobación
 */

fdescribe('GIVEN: the DataService', () => {
  let sut: DataService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    // Arrange
    httpClientSpy = jasmine.createSpyObj('HttpClient', {
      // Respuesta predefinida asíncrona
      get: of([{ id: 'ok', title: 'ok' }]),
    });
    sut = new DataService(httpClientSpy);
  });
  it('WHEN calling getProjects$ THEN the url is the expected', () => {
    // Act
    sut.getProjects$().subscribe();
    // Assert
    // Prueba de comportamiento testeando una llamada al colaborador
    // Comprobación de argumentos
    const actual = httpClientSpy.get.calls.mostRecent().args[0];
    const expected = 'https://api-base.herokuapp.com/api/pub/projects';
    expect(actual).toEqual(expected);
  });
  it('WHEN calling getProjects$ THEN returns an observable of a projects list', () => {
    // Act
    let actual: any[];
    // La suscripción a observables funciona
    sut.getProjects$().subscribe({
      next: data => (actual = data),
    });
    // Assert
    // Prueba de estado directo testeando la respuesta obtenida
    const expected = [{ id: 'ok', title: 'ok' }];
    expect(actual).toEqual(expected);
  });
});
