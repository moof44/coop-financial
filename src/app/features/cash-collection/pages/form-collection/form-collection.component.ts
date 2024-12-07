import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-form-collection',
  standalone: true,
  imports: [],
  templateUrl: './form-collection.component.html',
  styleUrl: './form-collection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormCollectionComponent implements OnInit {

  ngOnInit(): void { }

}
