import { Component } from '@angular/core';

@Component({
  selector: 'app-user-item',
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent implements OnInit {
  name: string;
  cunstructor () {
    this.name = 'Felipe';
  }
  ngOnInit () {

  }
}