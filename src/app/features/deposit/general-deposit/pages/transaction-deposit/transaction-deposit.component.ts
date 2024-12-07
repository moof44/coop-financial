import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { depositTransactions } from '../../../../../models/deposit.data';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '../../../../../shared/pipe/currency.pipe';

@Component({
  selector: 'app-transaction-deposit',
  standalone: true,
  imports: [
    MatCardModule, 
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
    CommonModule,
    CurrencyPipe,
  ],
  templateUrl: './transaction-deposit.component.html',
  styleUrl: './transaction-deposit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionDepositComponent implements OnInit {
  
  displayedColumns: string[] = ['date', 'orNumber', 'amount', 'interest','balance'];
  dataSource = depositTransactions;

  ngOnInit(): void { }

}
