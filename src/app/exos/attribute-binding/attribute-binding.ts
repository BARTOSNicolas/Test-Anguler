import { Component } from '@angular/core';
import {User} from "../../Models/User";


@Component({
  selector: 'app-attribute-binding',
  imports: [],
  templateUrl: './attribute-binding.html',
  styleUrl: './attribute-binding.css',
})

export class AttributeBinding {
  user: User = {
    firstname: 'Steaven',
    lastname: 'Cigale',
    imgUrl: 'https://media.istockphoto.com/id/1304467487/fr/photo/mulet.jpg?s=1024x1024&w=is&k=20&c=RJ51Pl7zLnSGUgtK__8E8Zg-fwpiB5mvV33n8jtLqzc=',
    status: true,
    age:  30,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    reputation: "Ringard"
  }
}
