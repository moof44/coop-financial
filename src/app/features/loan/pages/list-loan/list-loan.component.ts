import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { loans } from '../../../../models/loan.data';


@Component({
  selector: 'app-list-loan',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './list-loan.component.html',
  styleUrl: './list-loan.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListLoanComponent implements OnInit {
  #router = inject(Router)

  displayedColumns: string[] = [
    'loanType',
    'dateStarted',
    'balance',
  ];
  dataSource = loans;

  ngOnInit(): void {}

  transactionDetails(id:string){
    this.#router.navigateByUrl(`/deposit/transactions/${id}`)
  }

}
