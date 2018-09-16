import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from '../../entry.model';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styleUrls: ['./dir.component.css']
})
export class DirComponent implements OnInit {
  @Input() entry: Entry;
  @Output() deleteEntry = new EventEmitter();
  @Output() createEntry = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  update(): void {
  }
  delete(): void {
    this.deleteEntry.emit();
  }
  create(): void {
    this.createEntry.emit();
  }
}
