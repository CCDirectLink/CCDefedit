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

  ngOnInit() {
  }
  
  getText(): string{
    return this.entry.name.padStart(this.entry.name.length + this.entry.layer * 2, "\u00A0");
  }
  
  delete(): void{
    this.deleteEntry.emit();
  }
}
