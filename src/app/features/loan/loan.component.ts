import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-loan',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './loan.component.html',
  styleUrl: './loan.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoanComponent implements OnInit {

  ngOnInit(): void { }

}
