import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class CounterService {

  currentCount:number;

  constructor() { }

  private updateCounterSource = new Subject<number>();

  counterChanged$ = this.updateCounterSource.asObservable();

  updateCounter(counter: number){
    this.currentCount = counter;
    this.updateCounterSource.next(this.currentCount);
  }

}
