import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderToolbarComponent } from './shared/components/header-toolbar/header-toolbar.component';
import { AppStore } from './stores/app.store';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderToolbarComponent, SidenavComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    AppStore,
  ]
})
export class AppComponent {
  title = 'coop-financial';
  readonly #appStore = inject(AppStore);
}
