import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-withdraw.dialog',
  standalone: true,
  imports: [
    MatButtonModule, MatDialogModule
  ],
  templateUrl: './withdraw.dialog.component.html',
  styleUrl: './withdraw.dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WithdrawDialogComponent implements OnInit {

  ngOnInit(): void { }

}
