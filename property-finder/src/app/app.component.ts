import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CounterService } from './services/counter.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  properties = [];

  counter = 0;

  constructor(private http: Http, private counterService: CounterService) { }

  getList() {
  this.http.get('https://www.propertyfinder.ae/en/find-broker/ajax/search?page=1')
    .map((res) => res.json())
    .subscribe(
      data => {
              this.properties = data.data;
      },
      err => console.error(err),
      () => console.log(this.properties)
    );
   }

  ngOnInit() {
    this.getList();
  }

  slideBack() {
    if (this.counter >= 1) {
      this.counter -= 1;
    } else {
      this.counter = this.properties.length - 1;
    }
    this.counterService.updateCounter(this.counter);
  }

  slideForward() {
    if (this.counter >= this.properties.length - 1) {
      this.counter = 0;
    } else {
      this.counter += 1;
    }
    this.counterService.updateCounter(this.counter);
  }

  changeSlide(index) {
    this.counter = index;
    this.counterService.updateCounter(this.counter);
  }
  
}
