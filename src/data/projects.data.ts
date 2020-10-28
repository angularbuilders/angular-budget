import { Project } from 'src/app/core/model/project.interface';
import { Status } from 'src/app/core/model/status.enum';

export const PROJECTS: Project[] = [
  {
    id: 'mi-primer-proyecto',
    title: 'Mi primer proyecto',
    description: 'Este es un proyecto de prueba. Para ve de qué soy capaz.',
    start: new Date(),
    end: new Date(),
    budget: 1000,
    status: Status.InProgress,
    tasks: [
      {
        id: 'hacer-de-todo',
        title: 'Hacer de todo',
        done: false,
        projectId: 'mi-primer-proyecto',
      },
    ],
    expenses: [
      {
        id: 'comprar-cosas',
        title: 'Compar cosas',
        amount: 900,
        projectId: 'mi-primer-proyecto',
      },
    ],
  },
  {
    id: 'el-super-proyecto',
    title: 'El super proyecto',
    description: 'Ahora ya me he lanzado y voy con más confianza y recursos.',
    start: new Date(),
    end: new Date(),
    budget: 9000,
    status: Status.InProgress,
    tasks: [
      {
        id: 'preparar',
        title: 'Preparar',
        done: true,
        projectId: 'el-super-proyecto',
      },
      {
        id: 'transformar',
        title: 'Transformar',
        done: false,
        projectId: 'el-super-proyecto',
      },
      {
        id: 'prsentar',
        title: 'Presentar',
        done: false,
        projectId: 'el-super-proyecto',
      },
    ],
    expenses: [
      {
        id: 'publicidad',
        title: 'Publicidad',
        amount: 8000,
        projectId: 'el-super-proyecto',
      },
      {
        id: 'materiales',
        title: 'Materiales',
        amount: 3654,
        projectId: 'el-super-proyecto',
      },
    ],
  },
];
