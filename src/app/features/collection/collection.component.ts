import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionComponent implements OnInit {

  ngOnInit(): void { }

}
