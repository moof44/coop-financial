import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { depositTransactions } from '../../../../../models/deposit.data';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SavingsDialogComponent } from '../../../../../shared/dialog/savings.dialog/savings.dialog.component';
import { WithdrawDialogComponent } from '../../../../../shared/dialog/withdraw.dialog/withdraw.dialog.component';

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
    MatDialogModule,
  ],
  templateUrl: './list-savings.component.html',
  styleUrl: './list-savings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListSavingsComponent implements OnInit {

  displayedColumns: string[] = ['date', 'orNumber', 'amount', 'interest','balance'];
  dataSource = depositTransactions;
  readonly dialog = inject(MatDialog);
  

  ngOnInit(): void { }

  openDeposit(){
    const dialogRef = this.dialog.open(SavingsDialogComponent);
    dialogRef.afterClosed().subscribe(res=>{
      console.log(`Dialog result: ${res}`)
    })
  }

  openWithdraw(){
    const dialogRef = this.dialog.open(WithdrawDialogComponent);
    dialogRef.afterClosed().subscribe(res=>{
      console.log(`Dialog result: ${res}`)
    })
  }

}