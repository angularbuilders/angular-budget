import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProjectsFacadeService } from 'src/app/core/services/facades/projects-facade.service';
import { HomeComponent } from './home.component';

/**
 * 7 - Componentes complejos aislados
 * TestBed para configurar y compilar
 * Cero dependencias mediante inversión del control
 * Usa capacidades propias de angular
 * Observables para tratamiento asíncrono
 */
fdescribe('GIVEN the HomeComponent', () => {
  let homeComponentSUT: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    // Arrange
    await TestBed.configureTestingModule({
      imports: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [HomeComponent],
      // Inversión del control más sencilla
      // Aislado de cualquier dependencia
      providers: [
        {
          provide: ProjectsFacadeService,
          useValue: jasmine.createSpyObj('ProjectsFacadeService', {
            getProjects$: of([]),
            getTasks$: of([]),
            getTransactions$: of([]),
            getProjectViews: [], // Probar lanzando error en origen
            getTasksView: {},
          }),
        },
      ],
    }).compileComponents();
  });
  beforeEach(() => {
    // Arrange
    fixture = TestBed.createComponent(HomeComponent);
  });
  it('WHEN instantiated THEN should knows it is not loaded', () => {
    // Act
    // Implícito
    // objeto construido pero no inicializado
    // Assert
    // prueba de estado indirecta
    homeComponentSUT = fixture.componentInstance;
    const actual = homeComponentSUT.loaded;
    expect(actual).toBeFalsy();
  });
  it('WHEN initialized THEN should knows it is loaded', () => {
    // Act
    fixture.detectChanges(); // Llama a ngOnInit()
    // Assert
    // prueba de estado indirecta
    homeComponentSUT = fixture.componentInstance;
    const actual = homeComponentSUT.loaded;
    expect(actual).toBeTruthy();
  });
});
