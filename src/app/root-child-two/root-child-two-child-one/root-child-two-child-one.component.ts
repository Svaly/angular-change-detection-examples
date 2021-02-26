import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/person';

@Component({
  selector: 'app-root-child-two-child-one',
  templateUrl: './root-child-two-child-one.component.html',
  styleUrls: ['./root-child-two-child-one.component.scss']
})
export class RootChildTwoChildOneComponent implements OnInit {

  @Input() public textToDisplay: string = '';
  @Input() public person: Person | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
