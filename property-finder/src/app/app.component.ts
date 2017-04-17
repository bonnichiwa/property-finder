import { Component } from '@angular/core';
import { Http, Headers, RequestOptions, Jsonp } from '@angular/http';
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

  nameHover:string = '';

  constructor(private http: Http, private counterService: CounterService, private jsonp: Jsonp) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
  this.http.get('https://www.propertyfinder.ae/en/find-broker/ajax/search?page=1&callback=JSONP_CALLBACK')
  .map((res) => res.json())
  .subscribe(
    data => {
      this.properties = data.data
    },
    err => console.error(err)
   );
  }

  delayedAnimation() { 
    let slideAnimation = document.getElementById('property-finder-big-column');
    slideAnimation.className = '';
  }

  delayedFade() {
    let nameFade = document.getElementById('carousel-show-name');
    nameFade.className = '';
  }

  slideBack() {
    if (this.counter >= 1) {
      this.counter -= 1;
    } else {
      this.counter = this.properties.length - 1;
    }
    this.counterService.updateCounter(this.counter);
    let slideAnimation = document.getElementById('property-finder-big-column');
    slideAnimation.className += 'animated bounceOutRight';
    slideAnimation.className += 'animated bounceInLeft';
    window.setTimeout(this.delayedAnimation, 500);
  }

  slideForward() {
    let slideAnimation = document.getElementById('property-finder-big-column');
    if (this.counter >= this.properties.length - 1) {
      this.counter = 0;
    } else {
      this.counter += 1;
    }
    this.counterService.updateCounter(this.counter);
    slideAnimation.className += 'animated bounceOutLeft';
    slideAnimation.className += 'animated bounceInRight';
    window.setTimeout(this.delayedAnimation, 500);
  }

  changeSlide(index) {
    let slideAnimation = document.getElementById('property-finder-big-column');
    if (this.counter > index) {
      slideAnimation.className += 'animated bounceOutRight';
      slideAnimation.className += 'animated bounceInLeft';
      window.setTimeout(this.delayedAnimation, 500);
    } else {
      slideAnimation.className += 'animated bounceOutLeft';
      slideAnimation.className += 'animated bounceInRight';
      window.setTimeout(this.delayedAnimation, 500);
    }
    this.counter = index;
    this.counterService.updateCounter(this.counter);
  }

  showName(name) {
    this.nameHover = name;
    let nameFade = document.getElementById('carousel-show-name');
    nameFade.className += "animated fadeIn";
    window.setTimeout(this.delayedFade, 1000);

  }

  leaveName(name) {
    this.nameHover = name;
    let nameFade = document.getElementById('carousel-show-name');
    nameFade.className += "animated fadeOut";
    window.setTimeout(this.delayedFade, 1000);
  }
  
}