import { TestBed } from '@angular/core/testing';
import { UtilService } from 'src/app/core/services/util.service';
import { TimeAgoPipe } from './time-ago.pipe';

fdescribe('TimeAgoPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [UtilService] });
  });
  it('create an instance', () => {
    const service = TestBed.inject<UtilService>(UtilService);
    const pipe = new TimeAgoPipe(service);
    expect(pipe).toBeTruthy();
  });
  it('genera un mensaje coloquial por defecto', () => {
    const service = TestBed.inject<UtilService>(UtilService);
    const pipe = new TimeAgoPipe(service);
    const actual = pipe.transform(new Date(2000, 1, 1));
    const expected = 'hace mucho tiempo';
    expect(actual).toBe(expected);
  });
});
