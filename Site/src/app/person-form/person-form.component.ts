import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  model: Person;

  genders: number[] = [1,2];

  constructor() {
    let person = new Person();
    person.FirstName = "Bryan";
    person.LastName = "McCoy";
    person.Gender = 1;
    person.Id = 42;

    this.model = person;
   }

  ngOnInit() {
  }

}
