import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/person';

@Component({
  selector: 'app-root-child-two-child-two',
  templateUrl: './root-child-two-child-two.component.html',
  styleUrls: ['./root-child-two-child-two.component.scss']
})
export class RootChildTwoChildTwoComponent implements OnInit {

  @Input() public textToDisplay: string = '';
  @Input() public person: Person | undefined;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    changeDetectorRef.detach();
   }

  ngOnInit(): void {
  }

  public onManualDetectChanges() {
    this.changeDetectorRef.detectChanges();
  }
}
