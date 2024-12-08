import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-collection',
  standalone: true,
  imports: [
    MatCardModule, 
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
  ],
  templateUrl: './form-collection.component.html',
  styleUrl: './form-collection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormCollectionComponent implements OnInit {
  #router = inject(Router);

  ngOnInit(): void { }

  cancel(){
    this.#router.navigate(['/cash-collection']);
  }

}
