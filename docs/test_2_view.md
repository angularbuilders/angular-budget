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

### **Test:** [TimeAgoPipe - spec ](https://github.com/angularbuilders/angular-budget/blob/test_2_view/src/app/shared/atoms/value/value.component.spec.ts)

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

### Extra
https://www.npmjs.com/package/ng-mocks

---

> **Repositorio:** [angularbuilders/angular-budget/test_2_view](https://github.com/angularbuilders/angular-budget/tree/test_2_view)

> > By [Alberto Basalo](https://twitter.com/albertobasalo)
