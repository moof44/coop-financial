import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-deposit',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepositComponent implements OnInit {
  private route = inject(ActivatedRoute);
  source:any;

  ngOnInit(): void { 
    this.source = this.route.snapshot.data['source']; 
    console.log('Navigated from:', this.source); 

    if (this.source === 'savings') {
      // Logic specific to savings
    } else if (this.source === 'deposit') {
      // Logic specific to deposit
    }
  }

}
