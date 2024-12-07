import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { depositTransactions } from '../../../../../models/deposit.data';

@Component({
  selector: 'app-list-savings',
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
  templateUrl: './list-savings.component.html',
  styleUrl: './list-savings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListSavingsComponent implements OnInit {

  displayedColumns: string[] = ['date', 'orNumber', 'amount', 'interest','balance'];
  dataSource = depositTransactions;

  ngOnInit(): void { }

}