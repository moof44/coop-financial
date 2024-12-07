import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cash-collection',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './cash-collection.component.html',
  styleUrl: './cash-collection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CashCollectionComponent implements OnInit {

  ngOnInit(): void { }

}
