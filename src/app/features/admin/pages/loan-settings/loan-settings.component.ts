import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { LoanType } from '../../../../models/loan.model';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-loan-settings',
  standalone: true,
  imports: [
    MatCardModule, 
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
  ],
  templateUrl: './loan-settings.component.html',
  styleUrl: './loan-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoanSettingsComponent implements OnInit {
  #router = inject(Router);
  
  loanTypeOptions = [
    { value: LoanType.privilege, label: LoanType.privilege },
    { value: LoanType.productive, label: LoanType.productive },
    { value: LoanType.provident, label: LoanType.provident },
    { value: LoanType.emergency, label: LoanType.emergency },
    { value: LoanType.quick, label: LoanType.quick },
    { value: LoanType.educational, label: LoanType.educational },
    { value: LoanType.special, label: LoanType.special },
    { value: LoanType.ebike, label: LoanType.ebike },
  ];
  
  selected = LoanType.privilege;

  ngOnInit(): void { }

  cancel(){
    this.#router.navigate(['/members']);
  }

}
