import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pf-logo',
  templateUrl: './pf-logo.component.html',
  styleUrls: ['./pf-logo.component.css']
})
export class PfLogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() logo:string;

}
