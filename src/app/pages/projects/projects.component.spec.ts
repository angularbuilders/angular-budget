import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { LogicService } from 'src/app/core/services/logic.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectsComponent } from './projects.component';

fdescribe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let httpMock: HttpTestingController;
  let dataMock: DataService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule],
      declarations: [ProjectsComponent],
      providers: [DataService, LogicService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // Obtención de un doble a partir del injector
    httpMock = TestBed.inject(HttpTestingController);
    dataMock = TestBed.inject(DataService);
  });

  it('SHOULD be created', () => {
    expect(component).toBeTruthy();
  });

  it('SHOULD load data', () => {
    // Arrange
    const rootUrl = `https://api-base.herokuapp.com/api/pub`;
    const projectsRequest = httpMock.expectOne(`${rootUrl}/projects`);
    projectsRequest.flush([]);
    const transactionsRequest = httpMock.expectOne(`${rootUrl}/transactions`);
    transactionsRequest.flush([]);
    // Act IMPLÍCITO
    // Assert
    // Prueba de estado indirecta testeando una propiedad del colaborador
    const actual = component.loaded;
    expect(actual).toBeTruthy();
  });

  it('SHOULD load data again', () => {
    // Arrange
    spyOn(dataMock, 'getProjects$').and.returnValue(of([]));
    spyOn(dataMock, 'getTransactions$').and.returnValue(of([]));
    // Act
    component.ngOnInit();
    // Assert
    const actual = component.loaded;
    expect(actual).toBeTruthy();
  });
});

// Prueba con sintaxis recomendada
// Más limpia
// Cero dependencias

fdescribe('GIVEN a component to present a list of projects', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  beforeEach(async () => {
    // Arrange
    await TestBed.configureTestingModule({
      imports: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ProjectsComponent],
      providers: [
        {
          provide: DataService,
          useValue: jasmine.createSpyObj('DataService', {
            getProjects$: of([]),
            getTransactions$: of([]),
          }),
        },
        {
          provide: LogicService, // Aislado de cualquier dependencia
          useValue: jasmine.createSpyObj('LogicService', {
            composeProjectViews: [], // Probar lanzando error en origen
          }),
        },
      ],
    }).compileComponents();
  });
  beforeEach(() => {});
  it('WHEN instantited SHOULD knows it is not loaded', () => {
    // Act
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    // Assert
    const actual = component.loaded;
    expect(actual).toBeFalsy();
  });
  it('WHEN initialized SHOULD knows it is loaded', () => {
    // Act
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Llama a ngOnInit()
    // Assert
    const actual = component.loaded;
    expect(actual).toBeTruthy();
  });
});
