import { Member } from '../../member.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  @Input() entry: Member;
  @Output() deleteEntry = new EventEmitter();
  constructor() { }

  ngOnInit() { }
  delete(): void {
    this.deleteEntry.emit();
  }
}
