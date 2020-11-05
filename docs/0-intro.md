---
marp: true
---

# 0 - Introducción al testing con angular

## Pruebas de Angular sin Angular

---

## 0 - Karma y Jasmine

- preconfigurado
- autogenerado
- scriptable
- describe it
- it should
- given when then

---
### snippets

```json
{
  "Jasmine Should": {
    "prefix": "ab-jsm-is",
    "body": [
      "describe('$1', () => {",
      "  beforeEach(() => {});",
      "  it('SHOULD $2', () => {",
      "    const sut = null;",
      "    const actual = null;",
      "    const expected = null;",
      "    expect(actual).toEqual(expected);",
      "  });",
      "});",
    ],
    "description": "Esqueleto It Should con Jasmine"
  },
  "Jasmine Given When Then": {
    "prefix": "ab-jsm-gwt",
    "body": [
      "describe('GIVEN: $1', () => {",
      "  beforeEach(() => {});",
      "  it('WHEN $2 THEN $3', () => {",
      "    const sut = null;",
      "    const actual = null;",
      "    const expected = null;",
      "    expect(actual).toEqual(expected);",
      "  });",
      "});",
    ],
    "description": "Esqueleto GWT con Jasmine"
  },
}
```

---


## 1 - Probando un servicio como una clase

### **Issue:** [Testing minimalista del LogicService ](https://github.com/angularbuilders/angular-budget/issues/35)

Probar un servicio con métodos de lógica de negocio.

Sin dependencias.

Métodos _puros_.

---

###  **S.U.T:** [LogicService ](https://github.com/angularbuilders/angular-budget/blob/test_0_into/src/app/core/services/logic.service.ts)

```typescript
export class LogicService {
  public slugify(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, '-');
  }
}
```

---

### **Test:** [LogicService - Test ](https://github.com/angularbuilders/angular-budget/blob/test_0_into/src/app/core/services/logic.service.spec.ts)

```typescript
describe('GIVEN: the slugify method', () => {
  it('WHEN receives Angular 10.1 THEN returns angular-10-1', () => {
    const sut = new LogicService();
    const actual = sut.slugify('Angular 10.1');
    const expected = 'angular-10-1';
    expect(actual).toEqual(expected);
  });
});
```

---

## 2 - Probando un componente como una clase

### **Issue:** [Testing minimalista de un componente ](https://github.com/angularbuilders/angular-budget/issues/38)

Probar un componente con propiedades de datos.

Sin dependencias.

Sin importar _la presentación_.

---

###  **S.U.T:** [AboutPage ](https://github.com/angularbuilders/angular-budget/blob/test_0_into/src/app/pages/about/about.page.ts)

```typescript
export class AboutPage implements OnInit {
  title = 'Angular Budget';
  constructor() {}

  ngOnInit(): void {}
}
```

---

### **Test:** [AboutPage - Test ](https://github.com/angularbuilders/angular-budget/blob/test_0_into/src/app/pages/about/about.page.spec.ts)

```typescript
describe('GIVEN: the AboutComponent', () => {
  beforeEach(() => {});
  it('WHEN Ask for title THEN equals Angular Budget', () => {
    // Arrange
    const sut = new AboutPage();
    // Act
    const actual = sut.title;
    // Assert
    const expected = 'Angular Budget';
    expect(actual).toEqual(expected);
  });
});
```

---

## 3 - Probando unidades y espiando dependencias

### **Issue:** [Pruebas de un servicio con dependencias usando espías](https://github.com/angularbuilders/angular-budget/issues/39)

Probar un servicio con dependencias (Title).

Queremos hacer tests **unitarios**.

Usamos un doble en lugar de la dependencia original.

Con _Jasmine_ lo aconsejable es usar un **spy**

---

###  **S.U.T:** [UtilService](https://github.com/angularbuilders/angular-budget/blob/test_0_into/src/app/core/services/util.service.ts)

```typescript
export class UtilService {
  private siteTitle = 'Angular.Budget';

  constructor(private titleService: Title) {}

  public setDocumentTitle(title: string): void {
    const documentTitle = title ? `${title} | ${this.siteTitle}` : this.siteTitle;
    this.titleService.setTitle(documentTitle);
  }
}
```

---

### **Test:** [UtilService - Test ](https://github.com/angularbuilders/angular-budget/blob/test_0_into/src/app/core/services/logic.service.spec.ts)

```typescript
describe('The UtilsService', () => {
  beforeEach(() => {});
  it('SHOULD set the correct title', () => {
    // Arrange
    const titleServiceSpy = jasmine.createSpyObj('TitleService', ['setTitle']);
    const setTitleSpy: jasmine.Spy = titleServiceSpy.setTitle;
    const stubTitle = 'Pruebas unitarias';
    setTitleSpy.and.returnValue(stubTitle);
    const sut = new UtilService(titleServiceSpy);
    // Act
    sut.setDocumentTitle('Pruebas unitarias');
    const actual = setTitleSpy.calls.mostRecent().returnValue;
    // Assert
    const expected = 'Pruebas unitarias';
    expect(actual).toEqual(expected);
  });
});
```

---

## 4 - Probando código asíncrono

### **Issue:** [Prueba de un servicio asíncrono](https://github.com/angularbuilders/angular-budget/issues/44)

Probar un servicio con dependencias asíncrona (HttpClient).

Los tests tienen ser **asíncronos**.

Podemos probar:

- la llamada

- la subscripción

[Jasmine Asynchronous Work](https://jasmine.github.io/tutorials/async)

---

###  **S.U.T:** [DataService](https://github.com/angularbuilders/angular-budget/blob/test_0_into/src/app/core/services/data.service.ts)

```typescript
export class DataService {
  private rootUrl = `https://api-base.herokuapp.com/api/pub`;

  constructor(private httpClient: HttpClient) {}

  getProjects$(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${this.rootUrl}/projects`);
  }
}
```

---

### **Test:** [DataService - Test ](https://github.com/angularbuilders/angular-budget/blob/test_0_into/src/app/core/services/data.service.spec.ts)

```typescript
describe('GIVEN: A dataService', () => {
  let httpClientSpy: any;
  let getSpy: jasmine.Spy;
  beforeEach(() => {
    // Arrange
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    getSpy = httpClientSpy.get;
    const stubPojects = [];
    getSpy.and.returnValue(of(stubPojects));
  });
  ```
  ---
  ```typescript
  it('WHEN call the getProjects THEN the url is the expected', () => {
    // Act
    const sut = new DataService(httpClientSpy);
    sut.getProjects$().subscribe();
    // Assert
    const actual = getSpy.calls.mostRecent().args[0];
    const expected = 'https://api-base.herokuapp.com/api/pub/projects';
    expect(actual).toEqual(expected);
  });
  ```
  ---
  ```typescript
  it('WHEN call the getProjects THEN returns an observable of empty projects list', () => {
    // Act
    const sut = new DataService(httpClientSpy);
    let actual = null;
    sut.getProjects$().subscribe({
      next: data => (actual = data),
    });
    // Assert
    const expected = [];
    expect(actual).toEqual(expected);
  });
});
```

---

> **Repositorio:** [angularbuilders/angular-budget/test_0_intro](https://github.com/angularbuilders/angular-budget/tree/test_0_into)

> > By [Alberto Basalo](https://twitter.com/albertobasalo)