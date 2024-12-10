import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router, RouterModule } from '@angular/router';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-enroll-loan',
  standalone: true,
  imports: [
    MatCardModule, 
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
    MaterialFileInputModule,
    MatIconModule,
  ],
  templateUrl: './enroll-loan.component.html',
  styleUrl: './enroll-loan.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnrollLoanComponent implements OnInit {

  #router = inject(Router);

  ngOnInit(): void { }

  cancel(){
    this.#router.navigate(['/members']);
  }

}
