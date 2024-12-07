import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-general-deposit',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './general-deposit.component.html',
  styleUrl: './general-deposit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralDepositComponent implements OnInit {

  ngOnInit(): void { }

}
