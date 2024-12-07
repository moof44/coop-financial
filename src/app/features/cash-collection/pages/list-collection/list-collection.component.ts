import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-list-collection',
  standalone: true,
  imports: [],
  templateUrl: './list-collection.component.html',
  styleUrl: './list-collection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListCollectionComponent implements OnInit {

  ngOnInit(): void { }

}
