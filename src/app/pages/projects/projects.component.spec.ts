import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ProjectsFacadeService } from 'src/app/core/services/facades/projects-facade.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectsComponent } from './projects.component';

/**
 * 8 - Vistas
 * componente
 * fixture
 * debug y native elements
 * detección de cambios
 */

fdescribe('GIVEN the ProjectsComponent', () => {
  let fixture: ComponentFixture<ProjectsComponent>;
  let component: ProjectsComponent;
  let debugEl: DebugElement;
  let nativeEl: HTMLElement;
  beforeEach(async () => {
    // Arrange
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ProjectsComponent],
      providers: [
        {
          provide: ProjectsFacadeService,
          useValue: jasmine.createSpyObj('ProjectsFacadeService', {
            getProjects$: of([]).pipe(delay(100)),
            getTransactions$: of([]),
            getProjectViews: [],
          }),
        },
      ],
    }).compileComponents();
  });
  beforeEach(() => {
    // Arrange
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    nativeEl = fixture.nativeElement;
  });
  it('WHEN compiled THEN the component exists', () => {
    // Act
    const actual = component;
    // Assert
    expect(actual).toBeTruthy();
  });
  it('WHEN starts THEN has a header', () => {
    // Act
    // Consultando el elemento nativo
    const actual: HTMLElement = nativeEl.querySelector('header');
    // Assert
    expect(actual).toBeTruthy();
  });
  it('WHEN starts THEN the title is Lista de proyectos', () => {
    // Act
    // Consultando desde el wrapper
    const titleDebug: DebugElement = debugEl.query(By.css('h2'));
    const titleNative: HTMLElement = titleDebug.nativeElement;
    const actual = titleNative.textContent;
    // Assert
    const expected = ' Lista de proyectos ';
    expect(actual).toEqual(expected);
  });
  it('WHEN initializing THEN there is Esperando datos...', () => {
    // Act
    // forzar al evaluación de datos para contenido dinámico
    fixture.detectChanges();
    const quoteDebug: DebugElement = debugEl.query(By.css('blockquote'));
    const quoteNative: HTMLElement = quoteDebug.nativeElement;
    const actual = quoteNative.textContent;
    // Assert
    const expected = 'Esperando datos...';
    expect(actual).toEqual(expected);
  });
  it('WHEN stable THEN there is no Esperando datos...', fakeAsync(() => {
    // Act
    fixture.detectChanges();
    tick(100); // espera para que se resuelva el observable
    fixture.detectChanges(); // fuerza el recálculo de la vista
    const actual: DebugElement = debugEl.query(By.css('blockquote'));
    // Assert
    expect(actual).toBeFalsy();
  }));
});
