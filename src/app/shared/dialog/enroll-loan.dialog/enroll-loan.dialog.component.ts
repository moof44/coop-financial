import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-enroll-loan.dialog',
  standalone: true,
  imports: [
    MatButtonModule, MatDialogModule
  ],
  templateUrl: './enroll-loan.dialog.component.html',
  styleUrl: './enroll-loan.dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnrollLoanDialogComponent implements OnInit {

  ngOnInit(): void { }

}
