import { Component } from '@angular/core';
@Component({
  selector: 'app-counter',
  template: `
    <h1>New Component</h1>
    <hr />
    <h4>{{ counter }}</h4>

    <button (click)="increaseBy(1)" type="button">+1</button>
    <button (click)="resetCounter()" type="button">Reset</button>
    <button (click)="decreaseBy(1)" type="button">-1</button>
  `,
})
export class CounterComponent {
  counter: number = 0;

  increaseBy(value: number): void {
    this.counter += value;
  }

  decreaseBy(value: number): void {
    this.counter -= value;
  }

  resetCounter(): void {
    this.counter = 0;
  }
}
