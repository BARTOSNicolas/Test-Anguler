import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-ng-for',
  imports: [
    FormsModule,
  ],
  templateUrl: './ng-for.html',
  styleUrl: './ng-for.css',
})
export class NgFor {
  friendName: string = '';
  friendList: string[] = [];

  onAddFriend() {
    this.friendList.push(this.friendName);
    this.friendName = '';
  }
}
