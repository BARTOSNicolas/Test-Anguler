import {Component, computed} from '@angular/core';
import { Subscription, interval } from "rxjs";

@Component({
  selector: 'app-tp-observables',
  imports: [],
  templateUrl: './tp-observables.html',
  styleUrl: './tp-observables.css',
})
export class TpObservables {
  private maSubscription: Subscription;
  observable = interval(2000);
  currentValue = 0;
  isStarted = false
  isPaused = false;
  isPaired = false;
  numbers: number[] = [];

  get filteredNumbers() {
    if (!this.isPaired) return this.numbers.slice(-10);
    return this.numbers.filter(number => number % 2 === 0).slice(-10);
  }

  constructor() {
    this.maSubscription = new Subscription();
  }

  togglePaired() {
    this.isPaired = !this.isPaired;
  }

  randomNumber(): number {
    const randomNumber = Math.floor(Math.random() * 100);
    if (this.isPaired) {
      if (randomNumber % 2 === 0) {
        return randomNumber
      } else {
        return this.randomNumber()
      }
    } else {
      return randomNumber
    }
  }

  startRandomNumber() {
    this.isStarted = true
    this.maSubscription = this.observable.subscribe(value => {
      const newValue = this.randomNumber();
      this.currentValue = newValue;
      setTimeout(() => {
        this.numbers.push(newValue);
      }, 2000);
    });
    this.isPaused = false;
  }

  pauseRandomNumber() {
    if (!this.isPaused) {
      this.maSubscription.unsubscribe();
      this.isPaused = true;
    } else {
      this.startRandomNumber();
    }
  }

  stopRandomNumber() {
    this.maSubscription.unsubscribe();
    this.currentValue = 0;
    this.isPaused = false;
    this.isStarted = false;
  }

  ngOnDestroy() {
    this.maSubscription.unsubscribe();
  }

  protected readonly length = length;
}
