import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-withdraw.dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './withdraw.dialog.component.html',
  styleUrl: './withdraw.dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WithdrawDialogComponent implements OnInit {
  ngOnInit(): void {}
}
