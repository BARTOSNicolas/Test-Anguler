import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {
  friendName: string = '';
  list: string[] = [];

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.friendName = input.value;
  }

  onAddFriend() {
    this.list.push(this.friendName);
    this.friendName = '';
  }

  isDisabled() {
    return this.friendName.length === 0;
  }
}
