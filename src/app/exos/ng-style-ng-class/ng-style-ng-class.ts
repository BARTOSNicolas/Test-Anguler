import { Component } from '@angular/core';
import {User} from "../../Models/User";
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-ng-style-ng-class',
  imports: [
    NgClass,
    NgStyle
  ],
  templateUrl: './ng-style-ng-class.html',
  styleUrl: './ng-style-ng-class.css',
})
export class NgStyleNgClass {
  user: User = {
    firstname: 'Steaven',
    lastname: 'Cigale',
    imgUrl: 'https://media.istockphoto.com/id/1304467487/fr/photo/mulet.jpg?s=1024x1024&w=is&k=20&c=RJ51Pl7zLnSGUgtK__8E8Zg-fwpiB5mvV33n8jtLqzc=',
    status: true,
    age:  30,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    reputation: "Ringard"
  }

  onToggleReputation() {
    this.user.reputation = this.user.reputation === "Ringard" ? "Bourgeois" : "Ringard";
  }

  colorReputation() {
    return this.user.reputation === "Ringard" ? "red" : "green";
  }
}
