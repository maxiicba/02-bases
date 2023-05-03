import { Component } from '@angular/core';
import { expand } from 'rxjs';

//import {AppComponent} from 'src/app/app.component'

//Con a-component podemos utilizar la plantilla(sniped) de un componente

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCount()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  public increaseBy(value: number): void {
    // si no devulve nada es conveniente colocarle void
    this.counter += value;
  }

  public resetCount(): void {
    this.counter = 10;
  }
}
