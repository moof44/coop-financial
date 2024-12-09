import { ChangeDetectionStrategy, Component, effect, inject, Input, OnDestroy, ViewChild, type OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppStore } from '../../../stores/app.store';
import { NavigationMenu } from '../../../models/app.model';

@Component({
  selector: 'sidenav',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit, OnDestroy{
  readonly #appStore = inject(AppStore);
  @ViewChild(MatSidenav) sidenav!:MatSidenav;
  #subs = new Subscription();

  fillerNav2: NavigationMenu[] = [
    {
      label: 'Home',
      link: '/',
      icon: 'home' // Add icon property
    },
    {
      label: 'Members',
      link: '/members',
      icon: 'home' // Add icon property
    },
    {
      label: 'Savings',
      link: '/savings',
      icon: 'home' // Add icon property
    },
    {
      label: 'Deposit',
      link: '/deposit',
      icon: 'home' // Add icon property
    },
    {
      label: 'Loan',
      link: '/loan',
      icon: 'home' // Add icon property
    },
    {
      label: 'Cash Disbursement',
      link: '/disbursement',
      icon: 'home' // Add icon property
    },
    {
      label: 'Cash Collection',
      link: '/cash-collection',
      icon: 'home' // Add icon property
    },
    {
      label: 'Collection',
      link: '/collection',
      icon: 'home' // Add icon property
    },
    {
      label: 'Earnings',
      link: '/earnings',
      icon: 'home' // Add icon property
    },
    {
      label: 'Loan Settings',
      link: '/admin/loan-settings',
      icon: 'home' // Add icon property
    },
  ]

  constructor(){
    effect(()=>{
      if(this.sidenav){
        if(this.#appStore.sidenavOpen()){
          this.sidenav.open();
        }else{
          this.sidenav.close();
        }
      }
    })
  }

  ngOnInit(): void {}
  ngAfterViewInit(){
    this.#subs.add(
      this.sidenav.closedStart.subscribe(()=>{
        this.#appStore.toggleSignav(false);
      })
    )
  }
  ngOnDestroy(): void {
    this.#subs.unsubscribe();
  }

}
