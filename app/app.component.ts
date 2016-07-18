import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {PersonListComponent} from "./person/person-list/person-list.component";
import {PersonComponent} from "./person/person/person.component";

@Component({
    selector: 'my-app',
    directives: [PersonComponent, PersonListComponent],
    templateUrl: 'app/app.component.html'
})
export class AppComponent implements AfterViewInit {
  @ViewChild(PersonListComponent) personList: PersonListComponent;

  selectedPerson = null;

  constructor() { }

  ngAfterViewInit() {
    console.log(this.personList);
  }

  selectPerson($event) {
    this.selectedPerson = $event.person;
  }
}
