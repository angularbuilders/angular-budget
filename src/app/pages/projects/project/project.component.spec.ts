import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ProjectFacadeService } from 'src/app/core/services/facades/project-facade.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectComponent } from './project.component';

fdescribe('GIVEN the ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;
  let debugEl: DebugElement;
  let nativeEl: HTMLElement;
  let router: Router;

  beforeEach(async () => {
    // Arrange
    const routes: Routes = [
      {
        path: 'projects/:id',
        component: ProjectComponent,
      },
    ];
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), SharedModule],
      declarations: [ProjectComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: ProjectFacadeService,
          useValue: jasmine.createSpyObj('ProjectFacadeService', {
            getSlugFromRoute: '1',
            getProject$: of({}),
            getTransactions$: of([]),
            getTasks$: of([]),
            filterTransactionsByProjectId: [],
            filterTasksByProjectId: [],
            setDocumentTitle: undefined,
            getprojectView: {},
          }),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    // Arrange
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    nativeEl = fixture.nativeElement;
    router.initialNavigation();
    fixture.detectChanges();
  });

  it('WHEN The location is projects/1 THEN the component is initialized', fakeAsync(() => {
    router.navigate(['/projects/1']).then(() => {
      const actual = fixture.componentInstance.projectSlug;
      // Assert
      const expected = '1';
      expect(actual).toEqual(expected);
    });
    tick();
  }));
});
