import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Person } from '../person';

@Component({
  selector: 'app-person-form-reactive',
  templateUrl: './person-form-reactive.component.html',
  styleUrls: ['./person-form-reactive.component.css']
})
export class PersonFormReactiveComponent implements OnInit {

  model: Person;

  genders: number[] = [ 1, 2 ];


  constructor() {
    const person = new Person();
    person.FirstName = 'Bryan';
    person.LastName = 'McCoy';
    person.Gender = 1;
    person.Id = 42;

    this.model = person;
   }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
  }

}
