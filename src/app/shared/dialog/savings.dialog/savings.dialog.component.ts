import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-savings.dialog',
  standalone: true,
  imports: [
    MatButtonModule, MatDialogModule
  ],
  templateUrl: './savings.dialog.component.html',
  styleUrl: './savings.dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SavingsDialogComponent implements OnInit {

  ngOnInit(): void { }

}
