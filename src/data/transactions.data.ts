import { TransactionType } from 'src/app/core/model/transaction-type.enum';
import { Transaction } from 'src/app/core/model/transaction.interface';

export const TRANSACTIONS: Transaction[] = [
  {
    id: 'comprar-cosas',
    title: 'Compar cosas',
    amount: 900,
    type: TransactionType.Expense,
    projectId: 'mi-primer-proyecto',
  },
  {
    id: 'publicidad',
    title: 'Publicidad',
    amount: 8000,
    type: TransactionType.Expense,
    projectId: 'el-super-proyecto',
  },
  {
    id: 'materiales',
    title: 'Materiales',
    amount: 3654,
    type: TransactionType.Expense,
    projectId: 'el-super-proyecto',
  },
];
