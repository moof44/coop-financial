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
      {
        path: 'pre-registration',
        loadComponent: () =>
          import(
            './features/members/pages/pre-registration-member/pre-registration-member.component'
          ).then((m) => m.PreRegistrationMemberComponent),
        
      }
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
      },
      {
        path: 'enroll',
        loadComponent: ()=> import('./features/loan/pages/enroll-loan/enroll-loan.component').then(
          (m) => m.EnrollLoanComponent
        ),
      },
    ]
  },
  {
    path: 'disbursement',
    loadComponent: ()=> import('./features/cash-disbursement/cash-disbursement.component').then(
      (m) => m.CashDisbursementComponent
    ),
    children: [
      {
        path: '',
        loadComponent: ()=> import('./features/cash-disbursement/pages/list-dibursement/list-dibursement.component').then(
          (m) => m.ListDibursementComponent
        ),
      },
      {
        path: 'form/:id',
        loadComponent: ()=> import('./features/cash-disbursement/pages/form-disbursement/form-disbursement.component').then(
          (m) => m.FormDisbursementComponent
        ),
      },
      {
        path: 'form',
        loadComponent: ()=> import('./features/cash-disbursement/pages/form-disbursement/form-disbursement.component').then(
          (m) => m.FormDisbursementComponent
        ),
      },
    ]
  },
  {
    path: 'cash-collection',
    loadComponent: ()=> import('./features/cash-collection/cash-collection.component').then(
      (m) => m.CashCollectionComponent
    ),
    children: [
      {
        path: '',
        loadComponent: ()=> import('./features/cash-collection/pages/list-collection/list-collection.component').then(
          (m) => m.ListCollectionComponent
        ),
      },
      {
        path: 'form/:id',
        loadComponent: ()=> import('./features/cash-collection/pages/form-collection/form-collection.component').then(
          (m) => m.FormCollectionComponent
        ),
      },
      {
        path: 'form',
        loadComponent: ()=> import('./features/cash-collection/pages/form-collection/form-collection.component').then(
          (m) => m.FormCollectionComponent
        ),
      },
    ]
  },
  {
    path: 'collection',
    loadComponent: ()=> import('./features/collection/collection.component').then(
      (m) => m.CollectionComponent
    ),
    children: [
      {
        path: '',
        loadComponent: ()=> import('./features/collection/pages/list-collection/list-collection.component').then(
          (m) => m.ListCollectionComponent
        ),
      },
      {
        path: 'form/:id',
        loadComponent: ()=> import('./features/collection/pages/form-collection/form-collection.component').then(
          (m) => m.FormCollectionComponent
        ),
      },
      {
        path: 'form',
        loadComponent: ()=> import('./features/collection/pages/form-collection/form-collection.component').then(
          (m) => m.FormCollectionComponent
        ),
      },
    ]
  },
  {
    path: 'earnings',
    loadComponent: ()=> import('./features/earnings/earnings.component').then(
      (m) => m.EarningsComponent
    ),
    children:[
      {
        path: '',
        loadComponent: ()=> import('./features/earnings/pages/list-earnings/list-earnings.component').then(
          (m) => m.ListEarningsComponent
        ),
      },
      {
        path: 'form/:id',
        loadComponent: ()=> import('./features/earnings/pages/form-earnings/form-earnings.component').then(
          (m) => m.FormEarningsComponent
        ),
      },
      {
        path: 'form',
        loadComponent: ()=> import('./features/earnings/pages/form-earnings/form-earnings.component').then(
          (m) => m.FormEarningsComponent
        ),
      },
    ]
  },
  {
    path:'admin',
    loadComponent: ()=> import('./features/admin/admin.component').then(
      (m) => m.AdminComponent
    ),
    children: [
      {
        path: '',
        loadComponent: ()=> import('./features/admin/pages/home/home.component').then(
          (m) => m.HomeComponent
        ),
      },
      {
        path: 'loan-settings',
        loadComponent: ()=> import('./features/admin/pages/loan-settings/loan-settings.component').then(
          (m) => m.LoanSettingsComponent
        ),
      },
    ]
  },
];