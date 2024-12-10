import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-earnings',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './earnings.component.html',
  styleUrl: './earnings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EarningsComponent implements OnInit {

  ngOnInit(): void { }

}
