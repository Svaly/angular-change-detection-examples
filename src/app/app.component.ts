import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public form: FormGroup;
  public person: Person;
  public counter: number = 0;

  public get formTextToDisplay(): string {
    return this.form.get('textToDisplay')?.value;
  }

  constructor() {
    this.form = new FormGroup({
      textToDisplay: new FormControl(''),
      personName: new FormControl(''),
    });

    this.person = new Person('');
    this.form.get('personName')?.valueChanges.subscribe(newPersonName => this.person.name = newPersonName)
  }

  public onSubmit(form: FormGroup) {
    console.log(form);
  }

  public onCounterClicked() {
    this.counter++;
  }
}
