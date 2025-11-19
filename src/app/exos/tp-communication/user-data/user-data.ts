import {Component, Input, Output, EventEmitter} from '@angular/core';
import { User } from '../TPUser';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-data',
  imports: [FormsModule],
  templateUrl: './user-data.html',
  styleUrl: './user-data.css',
})
export class UserData {
  name: string;
  age: number;

  @Input() user: User = {name: '', age: 0};
  @Output() userChange = new EventEmitter<User>();

  updateUser() {
    this.userChange.emit({name: this.name, age: this.age});
  }

  constructor() {
    this.name = this.user.name;
    this.age = this.user.age;
  }
}
