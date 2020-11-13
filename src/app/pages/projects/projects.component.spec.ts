import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ProjectsFacadeService } from 'src/app/core/services/facades/projects-facade.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectsComponent } from './projects.component';

/**
 * WIP 8 - Vistas
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
      schemas: [],
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
    const headerNative: HTMLElement = nativeEl.querySelector('header');
    const actual = headerNative;
    // Assert
    expect(actual).toBeTruthy();
  });
  it('WHEN starts THEN the title is Lista de proyectos', () => {
    // Act
    fixture.detectChanges();
    const titleDebug: DebugElement = debugEl.query(By.css('h2'));
    const titleNative: HTMLElement = titleDebug.nativeElement;
    const actual = titleNative.textContent;
    // Assert
    const expected = ' Lista de proyectos ';
    expect(actual).toEqual(expected);
  });
  it('WHEN starts THEN there is Esperando datos...', () => {
    // Act
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
    tick(200);
    fixture.detectChanges();
    const quoteDebug: DebugElement = debugEl.query(By.css('blockquote'));
    const actual = quoteDebug;
    // Assert
    expect(actual).toBeFalsy();
  }));
});
