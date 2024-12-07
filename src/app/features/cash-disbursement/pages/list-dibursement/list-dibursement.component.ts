import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-list-dibursement',
  standalone: true,
  imports: [],
  templateUrl: './list-dibursement.component.html',
  styleUrl: './list-dibursement.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDibursementComponent implements OnInit {

  ngOnInit(): void { }

}
