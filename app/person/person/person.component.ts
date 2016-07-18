import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'person',
  templateUrl: 'app/person/person/person.component.html'
})
export class PersonComponent {
  @Input() person;
  @Output() onBack = new EventEmitter();

  selectedPerson: boolean;

  constructor() {}

}
