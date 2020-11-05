import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewProjectPage } from './new-project.page';

describe('NewProjectComponent', () => {
  let component: NewProjectPage;
  let fixture: ComponentFixture<NewProjectPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewProjectPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
