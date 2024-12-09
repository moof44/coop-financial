import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { deposits } from '../../../../../models/deposit.data';
import { DepositType } from '../../../../../models/deposit.model';
import { MatDialog } from '@angular/material/dialog';
import { EnrollDepositDialogComponent } from '../../../../../shared/dialog/enroll-deposit.dialog/enroll-deposit.dialog.component';

@Component({
  selector: 'app-list-deposit',
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
  templateUrl: './list-deposit.component.html',
  styleUrl: './list-deposit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDepositComponent implements OnInit {
  #router = inject(Router)
  readonly dialog = inject(MatDialog);

  displayedColumns: string[] = [
    'depositType',
    'dateStarted',
    'balance',
  ];
  dataSource = deposits.filter((v)=>(v.depositType != DepositType.savings));

  ngOnInit(): void {}

  transactionDetails(id:string){
    this.#router.navigateByUrl(`/deposit/transactions/${id}`)
  }

  enrollDeposit(){
    const dialogRef = this.dialog.open(EnrollDepositDialogComponent);
    dialogRef.afterClosed().subscribe(res=>{
      console.log(`Dialog result: ${res}`)
    })
    
  }
}
