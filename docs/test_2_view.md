---
marp: true
---

# 2 - Pruebas de las vistas

## 🖼 Pruebas de HTML y plantillas Angular

---

## 8 - Probando las vistas

### **Issue:** [Comportamiento página de proyectos ](https://github.com/angularbuilders/angular-budget/issues/61)

 * componente
 * fixture
 * debug y native elements
 * detección de cambios

---

###  **S.U.T:** [ProjectsComponent ](https://github.com/angularbuilders/angular-budget/blob/test_2_view/src/app/pages/projects/projects.component.html)

```html
<header>
  <h2>
    Lista de proyectos
  </h2>
</header>
<main>
  <ng-template #noDataYet>
    <ab-no-data-yet></ab-no-data-yet>
  </ng-template>
</main>
```

---

### **Test:** [ProjectsComponent - spec ](https://github.com/angularbuilders/angular-budget/blob/test_2_view/src/app/pages/projects/projects.component.spec.ts)

```typescript
describe('GIVEN: the ProjectsComponent', () => {
  let fixture: ComponentFixture<ProjectsComponent>;
  let component: ProjectsComponent;
  let debugEl: DebugElement; let nativeEl: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule], declarations: [ProjectsComponent],
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
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement; nativeEl = fixture.nativeElement;
  });
});
```

---

```typescript
it('WHEN starts THEN has a header', () => {
  // Consultando el elemento nativo
  const actual: HTMLElement = nativeEl.querySelector('header');
  expect(actual).toBeTruthy();
});
it('WHEN initializing THEN there is Esperando datos...', () => {
  // forzar la evaluación de datos para contenido dinámico
  fixture.detectChanges();
  // Consultando desde el wrapper angular
  const quoteDebug: DebugElement = debugEl.query(By.css('blockquote'));
  const quoteNative: HTMLElement = quoteDebug.nativeElement;
  const actual = quoteNative.textContent;
  const expected = 'Esperando datos...';
  expect(actual).toEqual(expected);
});
it('WHEN stable THEN there is no Esperando datos...', fakeAsync(() => {
  fixture.detectChanges();
  tick(100); // espera para que se resuelva el observable
  fixture.detectChanges(); // fuerza el recálculo de la vista
  const actual: DebugElement = debugEl.query(By.css('blockquote'));
  expect(actual).toBeFalsy();
}));
```

---

### Ejercicio

> aplicar esto mismo a `home.component.spec.ts`

```yml
GIVEN: the HomeComponent
WHEN: is stable
THEN: there is no Esperando datos..
```

---

## 9 - Input y renders

### **Issue:** [Entrada de datos y efecto css en value objects ](https://github.com/angularbuilders/angular-budget/issues/62)

Probar el efecto de los datos en la presentación
Tratar la vista como una unidad distinta del controlador

---

###  **S.U.T:** [Value Component ](https://github.com/angularbuilders/angular-budget/blob/test_2_view/src/app/shared/atoms/value/value.component.html)

```html
<dd [ngClass]="{'ok': isOk, 'ko': isOk===false  }"><b>{{ value  }}</b></dd>
```

---

### **Test:** [ValueComponent - spec ](https://github.com/angularbuilders/angular-budget/blob/test_2_view/src/app/shared/atoms/value/value.component.spec.ts)

```typescript
it('WHEN the input value is 42 THEN it renders a string 42', () => {
  component.value = String(42);
  fixture.detectChanges();
  const actualNative: HTMLElement = nativeEl.querySelector('b');
  const actual = actualNative.textContent;
  const expected = '42';
  expect(actual).toEqual(expected);
});
it('WHEN the input isOK is true THEN it renders with css class ok ', () => {
  component.isOk = true;
  fixture.detectChanges();
  const actualNative: HTMLElement = nativeEl.querySelector('dd');
  const actual = actualNative.classList.contains('ok');
  const expected = true;
  expect(actual).toEqual(expected);
});
```

---

### Ejercicio

> Aplicar técnica a date-time

```yml
GIVEN: the DateTimeComponent
WHEN: the input date is the New York WTC crash,
THEN: it renders 11/09/2001
```

---

## 10 - Pruebas con dummies

- cuando lo que queremos probar no tienen sentido por si mismo
- los pipes, muchas directivas
- los incluimos en una vista artificial

---

###  **S.U.T:** [TimeAgoPipe ](https://github.com/angularbuilders/angular-budget/blob/test_2_view/src/app/shared/pipes/time-ago.pipe.ts)

```html
<p>{{ theDate | timeAgo }}</p>
```

---

### **Test:** [TimeAgoPipe - spec ](https://github.com/angularbuilders/angular-budget/blob/test_2_view/src/app/shared/pipes/time-ago.pipe.spec.ts)

```typescript
@Component({
  template: `<p>{{ theDate | timeAgo }}</p>`,
})
class DummyComponent {
  theDate : Date;
}
...
  beforeEach(async () => {
    // Arrange
    await TestBed.configureTestingModule({
      declarations: [DummyComponent, TimeAgoPipe],
    }).compileComponents();
  });
   beforeEach(() => {
    // Arrange
    fixture = TestBed.createComponent(DummyComponent);
    ...
  });
```
---

```typescript
  it('WHEN the date is 01/01/2020 THEN renders hace mucho tiempo ', () => {
    // Act
    component.theDate = new Date(2020, 0, 1);
    // Assert
    const actualNative: HTMLElement = nativeEl.querySelector('p');
    const actual = actualNative.textContent;
    const expected = 'hace mucho tiempo';
    expect(actual).toEqual(expected);
  });
```

---

## 11 - Pruebas de enrutado

- usar `routerTestingModule`
- _no realiza la navegación real_

---

###  **S.U.T:** [ProjectComponent ](https://github.com/angularbuilders/angular-budget/blob/test_2_view/src/app/pages/projects/project/project.component.ts)

```html
<header *ngIf="loaded">
    <h2>
      {{ project.title }}
    </h2>
    <p>{{ project.description }}</p>
...
</header>
```
```typescript
ngOnInit(): void {
  this.projectSlug = this.service.getSlugFromRoute();
  this.loadData();
}
```

---

### **Test:** [ProjectComponent - spec ](https://github.com/angularbuilders/angular-budget/blob/test_2_view/src/app/pages/projects/project/project.component.spec.ts)

```typescript
  let router: Router;
  let activatedRoute: ActivatedRoute;
  beforeEach(async () => {
    // Arrange
    const routes: Routes = [{path:'projects/:id', component:ProjectComponent }];
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
```
---

```typescript
beforeEach(() => {
  // Arrange
  router = TestBed.inject(Router);
  activatedRoute = TestBed.inject(ActivatedRoute);
  fixture = TestBed.createComponent(ProjectComponent);
  component = fixture.componentInstance;
  debugEl = fixture.debugElement;
  nativeEl = fixture.nativeElement;
  router.initialNavigation();
  fixture.detectChanges();
});
```
---

```typescript
it('WHEN The location is projects/1 THEN the url is well formed', fakeAsync(() => {
  // Act
  router.navigate(['/projects/1']).then(() => {
    const actual = router.url;
    // Assert
    const expected = '/projects/1';
    expect(actual).toEqual(expected);
  });
  tick();
}));
```
---

## 12 - Prueba de un formulario template driven

- Mucha interacción con la template
- Dificultad de pruebas detalladas
- Los _model driven_, son más sencillos `+ts -html`

###  **S.U.T:** [ProjectComponent ](https://github.com/angularbuilders/angular-budget/blob/test_2_view/src/app/pages/projects/project/new-project/new-project.component.html)

```html
<form #f="ngForm"
        (ngSubmit)="saveNewProject()">
  <label for="title">Nombre:</label>
  <input [(ngModel)]="newProject.title"
        required
        type="text"
        id="title"
        name="title"
        size="20">
  <button type="submit"
        [disabled]="!f.valid">Crear</button>
</form>
```

---

### **Test:** [ProjectComponent - spec ](https://github.com/angularbuilders/angular-budget/blob/test_2_view/src/app/pages/projects/project/new-project/new-project.component.spec.ts)

```typescript
  it('WHEN I fill the form THEN should send the values', () => {
    component.ngOnInit();
    fixture.detectChanges();
    // Act
    const titleDebug = debugEl.query(By.css('#title'));
    const titleInput = titleDebug.nativeElement;
    titleInput.value = 'Testing my apps';
    titleDebug.triggerEventHandler('input', { target: titleInput });
    fixture.detectChanges();
    console.log(titleInput.value);
    const actual = component.newProject.title;
    // Assert
    const expected = 'Testing my apps';
    expect(actual).toEqual(expected);
  });
```


---





### Extra
https://www.npmjs.com/package/ng-mocks

---

> **Repositorio:** [angularbuilders/angular-budget/test_2_view](https://github.com/angularbuilders/angular-budget/tree/test_2_view)

> > By [Alberto Basalo](https://twitter.com/albertobasalo)
