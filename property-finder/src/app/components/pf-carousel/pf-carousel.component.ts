import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pf-carousel',
  templateUrl: './pf-carousel.component.html',
  styleUrls: ['./pf-carousel.component.css']
})
export class PfCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() name:string;
  @Input() logo:string;

}
