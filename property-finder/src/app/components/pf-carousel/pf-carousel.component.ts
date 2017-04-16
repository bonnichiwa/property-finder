import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'pf-carousel',
  templateUrl: './pf-carousel.component.html',
  styleUrls: ['./pf-carousel.component.css']
})
export class PfCarouselComponent implements OnInit {

  counter:number;

  constructor(private counterService: CounterService) {
  counterService.counterChanged$.subscribe(
    currentCount => {
      this.counter = currentCount;
    });
  }

  ngOnInit() {
    this.counter = 0;  
  }

  @Input() name:string;
  @Input() logo:string;
  @Input() description:string;
  @Input() index:number;

}
