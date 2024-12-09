import { ChangeDetectionStrategy, Component, inject, signal, type OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { transformedMembers } from '../../../../models/member.data';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'page-list-member',
  standalone: true,
  imports: [
    MatCardModule, 
    MatTableModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './list-member.component.html',
  styleUrl: './list-member.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListMemberComponent implements OnInit {
  #router = inject(Router);
  displayedColumns: string[] = ['id', 'name', 'contactNo', 'isActive'];
  dataSource = transformedMembers;
  mode = signal<'default' | 'for approval'>('default');

  ngOnInit(): void { }

  navigateToAdd(){
    if(this.mode() === 'default') this.#router.navigateByUrl('/members/add');
    else this.#router.navigateByUrl('/members/pre-registration');
  }

  navigateToUpdate(id:string){
    this.#router.navigateByUrl('/members/update/'+id);
  }

  navigateToPreRegistration(){
    this.#router.navigateByUrl('/members/pre-registration');
  }

  changeToForApproval(){
    this.mode.set('for approval');
  }

  changeToDefault(){
    this.mode.set('default');
  }

}
