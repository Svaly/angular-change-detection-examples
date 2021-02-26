import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/person';

@Component({
  selector: 'app-root-child-one-child-one',
  templateUrl: './root-child-one-child-one.component.html',
  styleUrls: ['./root-child-one-child-one.component.scss']
})
export class RootChildOneChildOneComponent implements OnInit {

  @Input() public textToDisplay: string = '';
  @Input() public person: Person | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
