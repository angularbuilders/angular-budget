import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutComponent } from './about.component';

/**
 * 2 - Componentes simples
 * Empezamos probando como clases normales
 */

fdescribe('GIVEN: the AboutComponent', () => {
  let sut: AboutComponent;
  beforeEach(() => {
    // Arrange
    sut = new AboutComponent();
  });
  it('WHEN ask for title THEN equals Angular Budget', () => {
    // Act
    const actual = sut.title;
    // Assert
    const expected = 'Angular Budget';
    expect(actual).toEqual(expected);
  });
});

/**
 * 5 - Componentes aparentemente simples
 * Seguimos probando como clases pero usando TestBed
 * Necesitamos importaciones... -> integración
 */

fdescribe('GIVEN: the AboutComponent in a TesBed', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [AboutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('WHEN ask for title THEN equals Angular Budget', () => {
    // Act
    const actual = component.title;
    // Assert
    const expected = 'Angular Budget';
    expect(actual).toEqual(expected);
  });
});
