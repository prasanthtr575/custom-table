import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data;
  columns;

  constructor(private httpClient: HttpClient) {
    this.columns = [
      { header: 'Id', field: 'id', locked: true },
      { header: 'Name', field: 'name', locked: true },
      { header: 'Username', field: 'username', locked: true },
      { header: 'Email', field: 'email' },
      { header: 'Phone', field: 'phone' },
      { header: 'Website', field: 'website' },
      { header: 'Street', field: 'street' },
      { header: 'Suite', field: 'suite' },
      { header: 'City', field: 'city' },
      { header: 'Zipcode', field: 'zipcode' },
      { header: 'Latitude', field: 'lat' },
      { header: 'Longitude', field: 'lng' },
      { header: 'Company', field: 'company' },
      { header: 'Catch Phrase', field: 'catchPhrase' },
      { header: 'B.S', field: 'bs' }
    ];
  }

  ngOnInit() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.data = this.formatUsers(data);
      });
  }

  formatUsers(data) {
    return data.map(obj => {
      let user = {
        ...obj,
        street: obj.address.street,
        suite: obj.address.suite,
        city: obj.address.city,
        zipcode: obj.address.zipcode,
        lat: obj.address.geo.lat,
        lng: obj.address.geo.lng,
        company: obj.company.name,
        catchPhrase: obj.company.catchPhrase,
        bs: obj.company.bs
      };

      delete obj.address;
      delete obj.company;

      return user;
    });
  }
}
