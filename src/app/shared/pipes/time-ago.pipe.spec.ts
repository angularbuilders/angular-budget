import { TestBed } from '@angular/core/testing';
import { UtilService } from 'src/app/core/services/util.service';
import { TimeAgoPipe } from './time-ago.pipe';

fdescribe('GIVEN the TimeAgoPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [UtilService] });
  });
  it('SHOULD create an instance', () => {
    const service = TestBed.inject<UtilService>(UtilService);
    const pipe = new TimeAgoPipe(service);
    expect(pipe).toBeTruthy();
  });
  it('WHEN called with an ancient date SHOULD generate a long time ago message', () => {
    // Arrange
    const service = TestBed.inject<UtilService>(UtilService);
    // es una prueba de integración, porque usa el servicio real como colaborador
    const pipe = new TimeAgoPipe(service);
    // Act
    const inputAncientDate = new Date(2000, 1, 1);
    const actual = pipe.transform(inputAncientDate);
    // Assert
    const expected = 'hace mucho tiempo';
    expect(actual).toBe(expected);
  });
});

// https://www.amadousall.com/angular-pipes-integrated-unit-testing/

// fdescribe('GIVEN the TimeAgoPipe alone', () => {
//   let pipe: TimeAgoPipe;
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       providers: [
//         {
//           provide: UtilService,
//           useValue: jasmine.createSpyObj('UtilService', { getFechaColoquial: 'hace mucho tiempo' }),
//         },
//       ],
//     }).compileComponents();
//   });
//   it('WHEN called with an ancient date SHOULD generate a long time ago message', () => {
//     const fixture = TestBed.overridePipe(TimeAgoPipe);
//     pipe = fixture.componentInstance;
//     // Act
//     const inputAncientDate = new Date(2000, 1, 1);
//     const actual = pipe.transform(inputAncientDate);
//     // Assert
//     const expected = 'hace mucho tiempo';
//     expect(actual).toBe(expected);
//   });
// });
