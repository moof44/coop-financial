import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-savings.dialog',
  standalone: true,
  imports: [
    MatButtonModule, MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './savings.dialog.component.html',
  styleUrl: './savings.dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SavingsDialogComponent implements OnInit {

  ngOnInit(): void { }

}
