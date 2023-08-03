import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeAge(): void {
    this.age = 32;
  }

  changeName(): void {
    this.name = 'Spiderman';
  }

  resetForm(): void {
    this.name = 'iroman';
    this.age = 45;
  }
}
