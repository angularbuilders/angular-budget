import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Status } from 'src/app/core/model/status.enum';
import { ProjectFacadeService } from 'src/app/core/services/facades/project-facade.service';
import { NewProjectComponent } from './new-project.component';

/*
 * 12 - Prueba de un formulario template driven
 * Mucha interacción con la template
 * Dificultad de pruebas detalladas
 * wait for whenStable
 * Los model driven, son más sencillos +ts -html
 */

fdescribe('GIVEN the NewProjectComponent', () => {
  let component: NewProjectComponent;
  let fixture: ComponentFixture<NewProjectComponent>;
  let debugEl: DebugElement;
  let nativeEl: HTMLElement;

  const projectFacadeServiceMock = {
    createNewProject: {
      id: '',
      title: '',
      start: new Date(2020, 0, 1),
      budget: 0,
      description: '',
      status: Status.InProgress,
    },
    saveNewProject$: of({}),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewProjectComponent],
      imports: [RouterTestingModule, FormsModule],
      providers: [
        {
          provide: ProjectFacadeService,
          useValue: jasmine.createSpyObj('ProjectFacadeService', projectFacadeServiceMock),
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    nativeEl = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('WHEN initialized THEN should have a new project', () => {
    // Act
    component.ngOnInit();
    const actual = component.newProject;
    // Assert
    const expected = {
      id: '',
      title: '',
      start: new Date(2020, 0, 1),
      budget: 0,
      description: '',
      status: Status.InProgress,
    };
    expect(actual).toEqual(expected);
  });

  it('WHEN I fill the form THEN should send the values', async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    // Act
    const titleDebug: DebugElement = debugEl.query(By.css('#title'));
    const titleInput: HTMLInputElement = titleDebug.nativeElement;
    titleInput.value = 'Testing my apps';
    titleInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const actual = component.newProject.title;
    // Assert
    const expected = 'Testing my apps';
    expect(actual).toEqual(expected);
  });
});
