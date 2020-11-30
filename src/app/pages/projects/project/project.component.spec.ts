import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ProjectFacadeService } from 'src/app/core/services/facades/project-facade.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectComponent } from './project.component';

/*
 * 11 - Pruebas de enrutado
 * usar routerTestingModule (no realiza la navegación real)
 */

fdescribe('GIVEN the ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;
  let debugEl: DebugElement;
  let nativeEl: HTMLElement;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  const projectFacadeServiceMock = {
    getSlugFromRoute: 1,
    getProject$: of({}),
    getTransactions$: of([]),
    getTasks$: of([]),
    filterTransactionsByProjectId: [],
    filterTasksByProjectId: [],
    setDocumentTitle: undefined,
    getprojectView: {},
  };
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
          useValue: jasmine.createSpyObj('ProjectFacadeService', projectFacadeServiceMock),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    // Arrange
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    nativeEl = fixture.nativeElement;
    // router.initialNavigation();
    fixture.detectChanges();
  });

  // it('WHEN The location is projects/1 THEN the url is well formed', fakeAsync(() => {
  //   // Act
  //   router.navigate(['/projects/1']).then(() => {
  //     const actual = router.url;
  //     // Assert
  //     const expected = '/projects/1';
  //     expect(actual).toEqual(expected);
  //   });
  //   tick();
  // }));

  it('WHEN The location is projects/1 THEN the url is well formed _ZONE_', async () => {
    // Act
    fixture.ngZone.run(() => {
      router.navigate(['/projects/1']);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        // Assert
        const actual = router.url;
        const expected = '/projects/1';
        expect(actual).toEqual(expected);
      });
    });
  });
});
