import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'members',
    loadComponent: () =>
      import('./features/members/members.component').then(
        (m) => m.MembersComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './features/members/pages/list-member/list-member.component'
          ).then((m) => m.ListMemberComponent),
      },
      {
        path: 'add',
        loadComponent: () =>
          import(
            './features/members/pages/form-member/form-member.component'
          ).then((m) => m.FormMemberComponent),
      },
      {
        path: 'update/:memberId',
        loadComponent: () =>
          import(
            './features/members/pages/form-member/form-member.component'
          ).then((m) => m.FormMemberComponent),
      },
      {
        path: 'update',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'savings',
    loadComponent: ()=> import('./features/deposit/deposit.component').then(
      (m) => m.DepositComponent
    ),
    data: { source: 'savings' },
    children: [
      {
        path: '',
        loadComponent: ()=> import('./features/deposit/savings/savings.component').then(
          (m) => m.SavingsComponent
        ),
        children:[
          {
            path:'',
            loadComponent: ()=> import('./features/deposit/savings/pages/list-savings/list-savings.component').then(
              (m) => m.ListSavingsComponent
            ),
          },
        ]
      }
    ]
  },
  {
    path: 'deposit',
    loadComponent: ()=> import('./features/deposit/deposit.component').then(
      (m) => m.DepositComponent
    ),
    data: { source: 'deposit' },
    children: [
      {
        path:'',
        loadComponent: ()=> import('./features/deposit/general-deposit/general-deposit.component').then(
          (m)=> m.GeneralDepositComponent
        ),
        children: [
          {
            path: '',
            loadComponent: ()=> import('./features/deposit/general-deposit/pages/list-deposit/list-deposit.component').then(
              (m)=> m.ListDepositComponent
            ),
          },
          {
            path: 'transactions/:id',
            loadComponent: ()=> import('./features/deposit/general-deposit/pages/transaction-deposit/transaction-deposit.component').then(
              (m)=> m.TransactionDepositComponent
            ),
          }
        ]
      }
    ]
  },
  {
    path: 'loan',
    loadComponent: ()=> import('./features/loan/loan.component').then(
      (m) => m.LoanComponent
    ),
    children: [
      {
        path: '',
        loadComponent: ()=> import('./features/loan/pages/list-loan/list-loan.component').then(
          (m) => m.ListLoanComponent
        ),
      }
    ]
  }
];