import { Component } from '@angular/core';
import { ParentComponent } from './parent.component';

@Component({
  selector: 'app-communication',
  imports: [ParentComponent],
  templateUrl: './communication.html',
  styleUrl: './communication.css',
})
export class Communication {

}
