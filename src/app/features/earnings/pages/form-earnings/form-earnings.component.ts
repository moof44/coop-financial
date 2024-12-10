import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-form-earnings',
  standalone: true,
  imports: [],
  templateUrl: './form-earnings.component.html',
  styleUrl: './form-earnings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormEarningsComponent implements OnInit {

  ngOnInit(): void { }

}
