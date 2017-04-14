import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  properties = [];

  constructor(private http: Http) { }

   getList() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.get('https://www.propertyfinder.ae/en/find-broker/ajax/search?page=1', options)
      .map((res) => res.json())
          .subscribe(
              data => {
                      this.properties = data;
              },
              err => console.error(err),
              () => console.log(this.properties)
          );
      }

    ngOnInit() {
      this.getList();
    }
}
