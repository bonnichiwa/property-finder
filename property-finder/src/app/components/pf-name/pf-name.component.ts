import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pf-name',
  templateUrl: './pf-name.component.html',
  styleUrls: ['./pf-name.component.css']
})
export class PfNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() name:string;
  @Input() description:string;

}
