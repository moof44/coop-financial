import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-enroll-deposit.dialog',
  standalone: true,
  imports: [
    MatButtonModule, MatDialogModule
  ],
  templateUrl: './enroll-deposit.dialog.component.html',
  styleUrl: './enroll-deposit.dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnrollDepositDialogComponent implements OnInit {

  ngOnInit(): void { }

}
