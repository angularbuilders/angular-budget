import { AboutComponent } from './about.component';

fdescribe('GIVEN: the AboutComponent', () => {
  beforeEach(() => {});
  it('WHEN Ask for title THEN equals Angular Budget', () => {
    const sut = new AboutComponent();
    const actual = sut.title;
    const expected = 'Angular Budget';
    expect(actual).toEqual(expected);
  });
});

/**
 * Original Angular CLI generated Code
 */

// import { ComponentFixture, TestBed } from '@angular/core/testing';

// describe('AboutComponent', () => {
//   let component: AboutComponent;
//   let fixture: ComponentFixture<AboutComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ AboutComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AboutComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
