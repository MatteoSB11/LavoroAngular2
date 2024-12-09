import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  title = 'app';
  names: string[]; 
  constructor() {
    this.names = ['Ari', 'Carlos', 'Felipe', 'Nate' ];
  }
ngOnInit() {
  }
}
