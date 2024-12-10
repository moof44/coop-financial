import { ChangeDetectionStrategy, Component, input, type OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-enroll-deposit.dialog',
  standalone: true,
  imports: [
    MatButtonModule, MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './enroll-deposit.dialog.component.html',
  styleUrl: './enroll-deposit.dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnrollDepositDialogComponent implements OnInit {
  isTimed = input<boolean>(false);
  withGoalAmount = input<boolean>(false);

  ngOnInit(): void { }

}
