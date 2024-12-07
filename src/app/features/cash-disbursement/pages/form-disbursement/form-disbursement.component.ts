import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-disbursement',
  standalone: true,
  imports: [
    MatCardModule, 
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
  ],
  templateUrl: './form-disbursement.component.html',
  styleUrl: './form-disbursement.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormDisbursementComponent implements OnInit {
  #router = inject(Router);

  ngOnInit(): void { }

  cancel(){
    this.#router.navigate(['/collection']);
  }

}
