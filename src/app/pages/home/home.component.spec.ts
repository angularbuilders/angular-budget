import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from 'src/app/core/services/data.service';
import { LogicService } from 'src/app/core/services/logic.service';
import { HomeComponent } from './home.component';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    // Sigue siendo un test de integración, aunque usa doble del httpclient
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [HomeComponent],
      imports: [HttpClientTestingModule],
      providers: [DataService, LogicService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('SHOULD be created', () => {
    expect(component).toBeTruthy();
  });
});
