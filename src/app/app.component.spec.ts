import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('GIVEN: the AppComponent', () => {
  beforeEach(async () => {
    // Arrange
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('WHEN: starts THEN: should be created', () => {
    // Act
    const fixture = TestBed.createComponent(AppComponent);
    // Assert
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('angular-budget app is running!');
  // });
});
