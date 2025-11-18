import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-ng-if',
  imports: [FormsModule, NgClass, NgStyle],
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
