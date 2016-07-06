import {Component, OnInit} from '@angular/core';
import {PersonListComponent} from "./person/person-list/person-list.component";
import {PersonComponent} from "./person/person/person.component";
import {Http} from "@angular/http";

@Component({
    selector: 'my-app',
    directives: [PersonComponent, PersonListComponent],
    templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {
  selectedPerson;
  people = [];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://api.randomuser.me/?results=10')
      .map(res => res.json())
      .subscribe(data => {
        this.people = data.results;
      });
  }

  selectPerson($event) {
    this.selectedPerson = $event.person;
  }
}
