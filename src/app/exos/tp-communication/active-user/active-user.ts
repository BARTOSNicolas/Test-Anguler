import {Component, Input} from '@angular/core';
import {User} from "../TPUser";

@Component({
  selector: 'app-active-user',
  imports: [],
  templateUrl: './active-user.html',
  styleUrl: './active-user.css',
})
export class ActiveUser {
  @Input() user: User = {name: '', age: 0};
}
