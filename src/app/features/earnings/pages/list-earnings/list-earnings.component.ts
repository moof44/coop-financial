import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { EarningsData } from '../../../../models/earnings.data';


@Component({
  selector: 'app-list-earnings',
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
  templateUrl: './list-earnings.component.html',
  styleUrl: './list-earnings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListEarningsComponent implements OnInit {

  displayedColumns: string[] = ['source', 'type', 'amount', 'date','userName'];
  dataSource = EarningsData;
  readonly dialog = inject(MatDialog);
  

  ngOnInit(): void { }

}
