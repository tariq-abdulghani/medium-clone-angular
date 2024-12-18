import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterInterface, decrementAction, incrementAction, resetAction } from './counter';
import { Store } from '@ngrx/store';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <button (click)="increment()">Increment</button>

    <div>Current Count: {{ (count$ | async)?.count }}</div>

    <button (click)="decrement()">Decrement</button>

    <button (click)="reset()">Reset Counter</button>
  `,
})
export class CounterComponent {
  protected count$: Observable<CounterInterface>;

  constructor(private store: Store<{ count: CounterInterface }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(incrementAction());
  }

  decrement() {
    this.store.dispatch(decrementAction());
  }
  reset() {
    this.store.dispatch(resetAction());
  }
}
