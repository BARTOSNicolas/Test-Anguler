import { Component } from '@angular/core';
import { ActiveUser } from './active-user/active-user';
import { UserData } from './user-data/user-data';
import {User} from "./TPUser"

@Component({
  selector: 'app-tp-communication',
  imports: [ActiveUser, UserData],
  templateUrl: './tp-communication.html',
  styleUrl: './tp-communication.css',
})
export class TpCommunication {
  currentUser: User = {name: '', age: 0};

  updateUser(user: User) {
    this.currentUser.name = user.name;
    this.currentUser.age = user.age;
  }
}
