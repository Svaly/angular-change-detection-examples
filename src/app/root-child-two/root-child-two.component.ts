import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-root-child-two',
  templateUrl: './root-child-two.component.html',
  styleUrls: ['./root-child-two.component.scss'],
})
export class RootChildTwoComponent implements OnInit {

  @Input() public textToDisplay: string = '';
  @Input() public person: Person | undefined;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
   }

  ngOnInit(): void {
  }

}
