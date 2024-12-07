import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { CashDisbursements } from '../../../../models/cash-disbursement.data';


@Component({
  selector: 'app-list-dibursement',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule, 
    MatTableModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './list-dibursement.component.html',
  styleUrl: './list-dibursement.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDibursementComponent implements OnInit {

  #router = inject(Router);
  displayedColumns: string[] = ['date', 'paidToName', 'cashAllocation', 'disbursementType', 'amount'];
  dataSource = CashDisbursements;

  ngOnInit(): void { }

  navigateToAdd(){
    this.#router.navigateByUrl('/disbursement/form');
  }

}
