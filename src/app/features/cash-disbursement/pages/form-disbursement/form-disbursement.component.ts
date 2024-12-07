import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-form-disbursement',
  standalone: true,
  imports: [],
  templateUrl: './form-disbursement.component.html',
  styleUrl: './form-disbursement.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormDisbursementComponent implements OnInit {

  ngOnInit(): void { }

}
