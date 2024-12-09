import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-form-member',
  standalone: true,
  imports: [
    MatCardModule, 
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
    MatIconModule,
  ],
  templateUrl: './form-member.component.html',
  styleUrl: './form-member.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormMemberComponent implements OnInit {
  #router = inject(Router);

  ngOnInit(): void { }

  cancel(){
    this.#router.navigate(['/members']);
  }

}
