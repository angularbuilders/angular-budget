import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
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
    httpMock = TestBed.inject(HttpTestingController);
    dataMock = TestBed.inject(DataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load data', () => {
    const rootUrl = `https://api-base.herokuapp.com/api/pub`;
    const projectsRequest = httpMock.expectOne(`${rootUrl}/projects`);
    projectsRequest.flush([]);
    const transactionsRequest = httpMock.expectOne(`${rootUrl}/transactions`);
    transactionsRequest.flush([]);
    const actual = component.loaded;
    expect(actual).toBeTruthy();
  });

  it('should load data again', () => {
    spyOn(dataMock, 'getProjects$').and.returnValue(of([]));
    spyOn(dataMock, 'getTransactions$').and.returnValue(of([]));
    component.ngOnInit();
    const actual = component.loaded;
    expect(actual).toBeTruthy();
  });
});
