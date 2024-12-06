import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppStore } from '../../../stores/app.store';

@Component({
  selector: 'header-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule, MatButtonModule, MatIconModule,
  ],
  templateUrl: './header-toolbar.component.html',
  styleUrl: './header-toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderToolbarComponent implements OnInit {
  readonly appStore = inject(AppStore);

  ngOnInit(): void {}

  toggleSidenav(){
    this.appStore.toggleSignav();
  }
}
