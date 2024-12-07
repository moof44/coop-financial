import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cash-disbursement',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './cash-disbursement.component.html',
  styleUrl: './cash-disbursement.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CashDisbursementComponent implements OnInit {

  ngOnInit(): void { }

}
