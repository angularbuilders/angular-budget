import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsPage } from './projects.page';

describe('ProjectsComponent', () => {
  let component: ProjectsPage;
  let fixture: ComponentFixture<ProjectsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
