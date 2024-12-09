import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { Collections } from '../../../../models/collection.data';

@Component({
  selector: 'app-list-collection',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule, 
    MatTableModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './list-collection.component.html',
  styleUrl: './list-collection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListCollectionComponent implements OnInit {
  #router = inject(Router);
  displayedColumns: string[] = ['date', 'memberName', 'paymentType', 'amount', 'remarks'];
  dataSource = Collections;

  ngOnInit(): void { }

  navigateToAdd(){
    this.#router.navigateByUrl('/collection/form');
  }

}
