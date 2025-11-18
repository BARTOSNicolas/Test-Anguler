import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-ng-for',
  imports: [
    FormsModule,
    NgForOf
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
