import { ViewCompiler } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-root-child-one',
  templateUrl: './root-child-one.component.html',
  styleUrls: ['./root-child-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RootChildOneComponent implements OnInit {
  @Input() public textToDisplay: string = '';
  @Input() public person: Person | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
