import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-ng-if',
  imports: [FormsModule],
  templateUrl: './ng-if.html',
  styleUrl: './ng-if.css',
})
export class NgIf {
  friendName: string = '';
  friendList: string[] = [];

  onAddFriend() {
    this.friendList.push(this.friendName);
    this.friendName = '';
  }
}
