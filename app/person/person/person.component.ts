import {Component, Input} from "@angular/core";

@Component({
  selector: 'person',
  templateUrl: 'app/person/person/person.component.html'
})
export class PersonComponent {
  @Input() person;
  selectedPerson: boolean;
  constructor() {}
}
