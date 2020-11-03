import { LogicService } from './logic.service';

/**
 * GIVEN: un servicio de lógica
 * WHEN: lo inicializo sin argumentos
 * THEN: obtengo una instancia
 */
describe('', () => {
  beforeEach(() => {});
  it('', () => {
    const actual = null;
    const expected = null;
    expect(actual).toEqual(expected);
  });
});
fdescribe('GIVEN the LogicService class', () => {
  beforeEach(() => {});
  it('WHEN Initialized THEN returns an instance', () => {
    const sut = new LogicService();
    const actual = typeof sut;
    const expected = 'object';
    expect(actual).toEqual(expected);
  });
});

fdescribe('GIVEN: A LogicService', () => {
  let sut: LogicService;
  beforeAll(() => {
    sut = new LogicService();
  });
  it('WHEN call slugify THEN return ', () => {
    const actual = sut.slugify('Web testing Angular 10.1');
    const expected = 'web-testing-angular-10-1';
    expect(actual).toEqual(expected);
  });
});

fdescribe('The slugify method', () => {
  beforeEach(() => {});
  it('SHOULD return a web safe text', () => {
    const sut = new LogicService();
    const actual = sut.slugify('Web testing Angular 10.1');
    const expected = 'web-testing-angular-10-1';
    expect(actual).toEqual(expected);
  });
});

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
