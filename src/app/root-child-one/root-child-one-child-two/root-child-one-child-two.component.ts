import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/person';

@Component({
  selector: 'app-root-child-one-child-two',
  templateUrl: './root-child-one-child-two.component.html',
  styleUrls: ['./root-child-one-child-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class RootChildOneChildTwoComponent implements OnInit {

  @Input() public textToDisplay: string = '';
  @Input() public person: Person | undefined;

  @Output() public clicked: EventEmitter<void> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  public onClicked(): void {
    this.clicked.emit();
  }
}
