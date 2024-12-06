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
    data: { source: 'deposit' } 
    //children: []
  },
];