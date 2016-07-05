import { Component } from '@angular/core';
import {PersonListComponent} from "./person/person-list/person-list.component";
import {PersonComponent} from "./person/person/person.component";

@Component({
    selector: 'my-app',
    directives: [PersonComponent, PersonListComponent],
    template: `
    <div id="person-list" class="container-fluid">
      <person-list (onSelectPerson)="selectPerson($event)"></person-list>
      <person [person]="selectedPerson"></person>
    </div>      
    `
})
export class AppComponent {
  selectedPerson;

  selectPerson($event) {
    this.selectedPerson = $event.person;
  }
}
