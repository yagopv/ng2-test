import {Http} from '@angular/http';
import {OnInit, Component, Output, EventEmitter, Input} from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'person-list',
  templateUrl: 'app/person/person-list/person-list.component.html'
})
export class PersonListComponent  implements OnInit {
  @Output() onSelectPerson = new EventEmitter();
  selectedPerson = null;
  people = [];

  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get('http://api.randomuser.me/?results=3')
      .map(res => res.json())
      .subscribe(data => {
        this.people = data.results;
      });
  }

  selectPerson(person) {
    this.onSelectPerson.emit({
      person: person
    });
  }
}
