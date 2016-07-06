import {Http} from '@angular/http';
import {OnInit, Component, Output, EventEmitter, Input} from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'person-list',
  templateUrl: 'app/person/person-list/person-list.component.html'
})
export class PersonListComponent {
  @Input() people;
  @Output() onSelectPerson = new EventEmitter();

  selectedPerson = null;

  selectPerson(person) {
    this.onSelectPerson.emit({
      person: person
    });
  }
}
